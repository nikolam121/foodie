const express = require('express');
const router = express.Router();
const data = require('../data/mydata');

router.get('/getCategories', function (req, res) {
    res.json(data.categories);
});

router.get('/getProducts/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const category = data.categories.find(c => c.id === id);

    if (category) {
        res.json(category.products);
    } else {
        res.status(404).send('Kategorija ne postoji');
    }
});

module.exports = router;