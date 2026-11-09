const express = require('express');
const session = require('express-session');
const path = require('path');
const data = require('./data/mydata');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: process.env.SESSION_SECRET || 'foodie-dev-session-secret',
    resave: false,
    saveUninitialized: true
}));

const homeRoutes = require('./routes/home.routes');
const cartRoutes = require('./routes/cart.routes');
app.use('/home', homeRoutes);
app.use('/cart', cartRoutes);

app.get('/', (req, res) => {
    res.render('home', { website: data.website, categories: data.categories });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;
