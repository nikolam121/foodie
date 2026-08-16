const express = require('express');
const session = require('express-session');
const path = require('path');
const data = require('./data/mydata');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'tajni-kljuc-za-lab2',
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

app.listen(PORT, () => {
    console.log(`Server radi na http://localhost:${PORT}`);
});