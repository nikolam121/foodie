# FOODIE

An online grocery store: browse products by category, add them to a cart, and see the total amount due. Works without logging in, the cart is kept per browser session.

## Tech stack

| Layer | Technology |
| --- | --- |
| Server | Node.js, Express 5 |
| Templates | EJS |
| Session | express-session |

## Running

```bash
npm install
npm start
```

The app starts at `http://localhost:3000`.

## Structure

```
server.js               Entry point, sets up EJS, static files, and sessions
routes/home.routes.js    Fetches categories and products
routes/cart.routes.js    Adds, removes, and lists cart items
data/mydata.js           Product catalog (10 categories, 50 products, prices in EUR)
views/                   EJS templates (home page, cart, header/footer partials)
public/                  Static assets: styles, client-side JS, product images
```

## API

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/home/getCategories` | all categories |
| `GET` | `/home/getProducts/:id` | products for a category, including price |
| `POST` | `/cart/add/:id` | adds a product to the cart |
| `POST` | `/cart/remove/:id` | decreases quantity by one |
| `GET` | `/cart/getAll` | cart items, per-line price, and total |

Actions that change cart state go through `POST`, not `GET`, so they can't be triggered accidentally by browser prefetching.

If a session references a product that no longer exists in the catalog, `/cart/getAll` silently drops it from the cart instead of returning an error.
