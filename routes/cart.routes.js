const express = require('express');
const router = express.Router();
const data = require('../data/mydata');

function findProduct(id) {
    for (const cat of data.categories) {
        const p = cat.products.find(p => p.id === id);
        if (p) return p;
    }
    return null;
}

router.get('/', function (req, res) {
    res.render('cart', { categories: data.categories });
});

router.post('/add/:id', function (req, res) {
    const id = parseInt(req.params.id);
    if (!findProduct(id)) return res.status(404).send('Product not found');

    if (!req.session.cart) req.session.cart = {};
    req.session.cart[id] = (req.session.cart[id] || 0) + 1;

    res.json({ success: true, cart: req.session.cart });
});

router.post('/remove/:id', function (req, res) {
    const id = parseInt(req.params.id);

    if (req.session.cart && req.session.cart[id]) {
        req.session.cart[id] -= 1;
        if (req.session.cart[id] <= 0) delete req.session.cart[id];
    }

    res.json({ success: true, cart: req.session.cart || {} });
});

router.get('/getAll', function (req, res) {
    const cart = req.session.cart || {};
    let changed = false;

    const items = Object.keys(cart)
        .map(function (id) {
            const product = findProduct(parseInt(id));
            if (!product) {
                delete cart[id];
                changed = true;
                return null;
            }
            const quantity = cart[id];
            return {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: quantity,
                lineTotal: Math.round(product.price * quantity * 100) / 100
            };
        })
        .filter(Boolean);

    if (changed) req.session.cart = cart;

    const total = Math.round(items.reduce((sum, item) => sum + item.lineTotal, 0) * 100) / 100;

    res.json({ items, total });
});

module.exports = router;
