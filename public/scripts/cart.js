document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    updateCartCount();
    drawCart();

    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => { window.location.href = '/'; });
    });
});

async function drawCart() {
    const res = await fetch('/cart/getAll');
    const data = await res.json();
    const items = data.items;

    const table = document.getElementById('cartTable');
    const empty = document.getElementById('cartEmpty');
    const tbody = document.getElementById('cartItems');
    const totalRow = document.getElementById('cartTotalRow');

    if (items.length === 0) {
        table.style.display = 'none';
        empty.classList.remove('hidden');
        return;
    }

    table.style.display = 'table';
    empty.classList.add('hidden');
    tbody.innerHTML = '';

    items.forEach(item => {
        const tr = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.className = 'item-name';
        nameTd.textContent = item.name;

        const priceTd = document.createElement('td');
        priceTd.textContent = formatPrice(item.price);

        const qtyTd = document.createElement('td');
        const wrap = document.createElement('div');
        wrap.className = 'qty-wrap';

        const dec = document.createElement('button');
        dec.textContent = '-';
        dec.addEventListener('click', () => changeQty('remove', item.id));

        const val = document.createElement('span');
        val.textContent = item.quantity;

        const inc = document.createElement('button');
        inc.textContent = '+';
        inc.addEventListener('click', () => changeQty('add', item.id));

        wrap.appendChild(dec);
        wrap.appendChild(val);
        wrap.appendChild(inc);
        qtyTd.appendChild(wrap);

        const lineTotalTd = document.createElement('td');
        lineTotalTd.className = 'line-total';
        lineTotalTd.textContent = formatPrice(item.lineTotal);

        tr.appendChild(nameTd);
        tr.appendChild(priceTd);
        tr.appendChild(qtyTd);
        tr.appendChild(lineTotalTd);
        tbody.appendChild(tr);
    });

    totalRow.querySelector('.cart-total-value').textContent = formatPrice(data.total);
    totalRow.classList.remove('hidden');
}

async function changeQty(action, id) {
    await fetch('/cart/' + action + '/' + id, { method: 'POST' });
    updateCartCount();
    drawCart();
}
