document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    updateCartCount();

    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadProducts(btn.dataset.id, btn.textContent);
        });
    });

    if (buttons.length > 0) {
        buttons[0].classList.add('active');
        loadProducts(buttons[0].dataset.id, buttons[0].textContent);
    }
});

async function loadProducts(categoryId, categoryName) {
    const res = await fetch('/home/getProducts/' + categoryId);
    const products = await res.json();

    document.getElementById('productsTitle').textContent = 'Products - ' + categoryName;
    const label = document.getElementById('currentCategory');
    if (label) label.textContent = categoryName.toUpperCase();

    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const wrap = document.createElement('div');
        wrap.className = 'product-img-wrap';

        const img = document.createElement('img');
        img.src = '/images/' + product.image;
        img.alt = product.name;
        img.onerror = function () { this.src = '/images/placeholder.jpg'; };

        const overlay = document.createElement('div');
        overlay.className = 'add-overlay';
        const addBtn = document.createElement('button');
        addBtn.className = 'add-btn';
        addBtn.textContent = 'Add';
        addBtn.addEventListener('click', () => addToCart(product.id, product.name));
        overlay.appendChild(addBtn);

        wrap.appendChild(img);
        wrap.appendChild(overlay);

        const info = document.createElement('div');
        info.className = 'product-info';
        const nameDiv = document.createElement('div');
        nameDiv.textContent = product.name;
        const priceDiv = document.createElement('div');
        priceDiv.className = 'product-price';
        priceDiv.textContent = formatPrice(product.price);
        const small = document.createElement('small');
        small.textContent = categoryName;
        info.appendChild(nameDiv);
        info.appendChild(priceDiv);
        info.appendChild(small);

        card.appendChild(wrap);
        card.appendChild(info);
        grid.appendChild(card);
    });
}

async function addToCart(id, name) {
    await fetch('/cart/add/' + id, { method: 'POST' });
    updateCartCount();
    showToast(name + ' added to cart!');
}