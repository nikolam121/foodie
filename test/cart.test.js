const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server');
const data = require('../data/mydata');

let server;
let base;
let cookie = '';

before(async () => {
    server = app.listen(0);
    await new Promise((resolve) => server.once('listening', resolve));
    base = `http://localhost:${server.address().port}`;
});

after(() => server.close());

async function call(method, path) {
    const res = await fetch(base + path, { method, headers: cookie ? { cookie } : {} });
    const setCookie = res.headers.get('set-cookie');
    if (setCookie) cookie = setCookie.split(';')[0];
    return res;
}

const firstProduct = data.categories[0].products[0];

test('an unknown product cannot be added', async () => {
    const res = await call('POST', '/cart/add/999999');
    assert.equal(res.status, 404);
});

test('adding a product twice gives quantity 2 and the right line total', async () => {
    await call('POST', `/cart/add/${firstProduct.id}`);
    await call('POST', `/cart/add/${firstProduct.id}`);

    const body = await (await call('GET', '/cart/getAll')).json();

    assert.equal(body.items.length, 1);
    assert.equal(body.items[0].quantity, 2);
    assert.equal(body.items[0].lineTotal, Math.round(firstProduct.price * 2 * 100) / 100);
    assert.equal(body.total, body.items[0].lineTotal);
});

test('removing decreases the quantity and drops the line at zero', async () => {
    await call('POST', `/cart/remove/${firstProduct.id}`);
    let body = await (await call('GET', '/cart/getAll')).json();
    assert.equal(body.items[0].quantity, 1);

    await call('POST', `/cart/remove/${firstProduct.id}`);
    body = await (await call('GET', '/cart/getAll')).json();
    assert.deepEqual(body, { items: [], total: 0 });
});
