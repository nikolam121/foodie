const data = {
    website: "FOODIE",
    categories: [
        {
            id: 1,
            name: "Meat",
            products: [
                { id: 1, name: "Chicken Drumstick 250g", image: "drumstick250g.jpg", price: 1.49 },
                { id: 2, name: "Beef Rump Steak 1kg", image: "rumpsteak1kg.jpg", price: 18.99 },
                { id: 3, name: "Sausages 150g", image: "sausages150gr.jpg", price: 1.79 },
                { id: 4, name: "Pork Chop 500g", image: "porkchop500g.jpg", price: 4.49 },
                { id: 5, name: "Turkey Breast 400g", image: "turkeybreast400g.jpg", price: 5.29 }
            ]
        },
        {
            id: 2,
            name: "Sweets",
            products: [
                { id: 6, name: "Milka Chocolate 100g", image: "milka100g.jpg", price: 1.39 },
                { id: 7, name: "Kinder Egg 20g", image: "kinder20g.jpg", price: 0.89 },
                { id: 8, name: "Haribo Gummies 200g", image: "haribo200g.jpg", price: 1.99 },
                { id: 9, name: "Raffaello 150g", image: "raffaello150g.jpg", price: 3.49 },
                { id: 10, name: "M&M's 100g", image: "mms100g.jpg", price: 1.59 }
            ]
        },
        {
            id: 3,
            name: "Bread & Pastries",
            products: [
                { id: 11, name: "White Bread 500g", image: "whitebread500g.jpg", price: 0.99 },
                { id: 12, name: "Croissant 80g", image: "croissant80g.jpg", price: 0.79 },
                { id: 13, name: "Bread Roll 60g", image: "kifla60g.jpg", price: 0.35 },
                { id: 14, name: "Pizza Dough 400g", image: "pizzadough400g.jpg", price: 1.49 },
                { id: 15, name: "Wheat Bread 700g", image: "wheatbread700g.jpg", price: 1.29 }
            ]
        },
        {
            id: 4,
            name: "Dairy",
            products: [
                { id: 16, name: "Milk 1L", image: "milk1l.jpg", price: 1.09 },
                { id: 17, name: "Yogurt 200g", image: "yogurt200g.jpg", price: 0.69 },
                { id: 18, name: "Edam Cheese 300g", image: "edamer300g.jpg", price: 3.99 },
                { id: 19, name: "Butter 250g", image: "butter250g.jpg", price: 2.29 },
                { id: 20, name: "Fresh Cheese 500g", image: "freshcheese500g.jpg", price: 2.99 }
            ]
        },
        {
            id: 5,
            name: "Fruit",
            products: [
                { id: 21, name: "Apples 1kg", image: "apples1kg.jpg", price: 1.49 },
                { id: 22, name: "Bananas 1kg", image: "bananas1kg.jpg", price: 1.29 },
                { id: 23, name: "Oranges 1kg", image: "oranges1kg.jpg", price: 1.79 },
                { id: 24, name: "Grapes 500g", image: "grapes500g.jpg", price: 2.49 },
                { id: 25, name: "Lemons 500g", image: "lemons500g.jpg", price: 1.99 }
            ]
        },
        {
            id: 6,
            name: "Vegetables",
            products: [
                { id: 26, name: "Tomatoes 500g", image: "tomatoes500g.jpg", price: 1.59 },
                { id: 27, name: "Cucumbers 500g", image: "cucumbers500g.jpg", price: 0.99 },
                { id: 28, name: "Peppers 500g", image: "peppers500g.jpg", price: 1.89 },
                { id: 29, name: "Carrots 1kg", image: "carrots1kg.jpg", price: 0.99 },
                { id: 30, name: "Onions 1kg", image: "onions1kg.jpg", price: 0.89 }
            ]
        },
        {
            id: 7,
            name: "Drinks",
            products: [
                { id: 31, name: "Coca Cola 2L", image: "cola2l.jpg", price: 2.29 },
                { id: 32, name: "Mineral Water 1.5L", image: "water1.5l.jpg", price: 0.69 },
                { id: 33, name: "Orange Juice 1L", image: "orangejuice1l.jpg", price: 1.49 },
                { id: 34, name: "Iced Tea 1.5L", image: "icetea1.5l.jpg", price: 1.79 },
                { id: 35, name: "Energy Drink 250ml", image: "energy250ml.jpg", price: 1.29 }
            ]
        },
        {
            id: 8,
            name: "Pasta",
            products: [
                { id: 36, name: "Spaghetti 500g", image: "spaghetti500g.jpg", price: 0.99 },
                { id: 37, name: "Penne 500g", image: "penne500g.jpg", price: 0.99 },
                { id: 38, name: "Fusilli 500g", image: "fusilli500g.jpg", price: 1.09 },
                { id: 39, name: "Lasagna Sheets 250g", image: "lasagna250g.jpg", price: 1.49 },
                { id: 40, name: "Gnocchi 500g", image: "gnocchi500g.jpg", price: 1.79 }
            ]
        },
        {
            id: 9,
            name: "Spices",
            products: [
                { id: 41, name: "Salt 250g", image: "salt250g.jpg", price: 0.59 },
                { id: 42, name: "Black Pepper 50g", image: "pepper50g.jpg", price: 1.99 },
                { id: 43, name: "Vegeta Seasoning 250g", image: "vegeta250g.jpg", price: 2.49 },
                { id: 44, name: "Garlic Powder 50g", image: "garlicpowder50g.jpg", price: 1.59 },
                { id: 45, name: "Oregano 20g", image: "oregano20g.jpg", price: 1.29 }
            ]
        },
        {
            id: 10,
            name: "Oil",
            products: [
                { id: 46, name: "Sunflower Oil 1L", image: "sunfloweroil1l.jpg", price: 2.29 },
                { id: 47, name: "Olive Oil 500ml", image: "oliveoil500ml.jpg", price: 4.99 },
                { id: 48, name: "Pumpkin Seed Oil 250ml", image: "pumpkinoil250ml.jpg", price: 5.99 },
                { id: 49, name: "Peanut Oil 500ml", image: "peanutoil500ml.jpg", price: 3.49 },
                { id: 50, name: "Frying Oil 1L", image: "fryingoil1l.jpg", price: 2.79 }
            ]
        }
    ]
};

module.exports = data;
