const data = {
    website: "Hrana",
    categories: [
        {
            id: 1,
            name: "Meso",
            products: [
                { id: 1, name: "Pileći batak 250gr", image: "drumstick250g.jpg", price: 1.49 },
                { id: 2, name: "Juneći ramstek 1kg", image: "rumpsteak1kg.jpg", price: 18.99 },
                { id: 3, name: "Hrenovke 150gr", image: "sausages150gr.jpg", price: 1.79 },
                { id: 4, name: "Svinjski kotlet 500g", image: "porkchop500g.jpg", price: 4.49 },
                { id: 5, name: "Pureća prsa 400g", image: "turkeybreast400g.jpg", price: 5.29 }
            ]
        },
        {
            id: 2,
            name: "Slatkiši",
            products: [
                { id: 6, name: "Čokolada Milka 100g", image: "milka100g.jpg", price: 1.39 },
                { id: 7, name: "Kinder jaje 20g", image: "kinder20g.jpg", price: 0.89 },
                { id: 8, name: "Haribo gumi 200g", image: "haribo200g.jpg", price: 1.99 },
                { id: 9, name: "Raffaello 150g", image: "raffaello150g.jpg", price: 3.49 },
                { id: 10, name: "M&M's 100g", image: "mms100g.jpg", price: 1.59 }
            ]
        },
        {
            id: 3,
            name: "Kruh i pecivo",
            products: [
                { id: 11, name: "Bijeli kruh 500g", image: "whitebread500g.jpg", price: 0.99 },
                { id: 12, name: "Croissant 80g", image: "croissant80g.jpg", price: 0.79 },
                { id: 13, name: "Kifla 60g", image: "kifla60g.jpg", price: 0.35 },
                { id: 14, name: "Pizza tijesto 400g", image: "pizzadough400g.jpg", price: 1.49 },
                { id: 15, name: "Pšenični kruh 700g", image: "wheatbread700g.jpg", price: 1.29 }
            ]
        },
        {
            id: 4,
            name: "Mliječni proizvodi",
            products: [
                { id: 16, name: "Mlijeko 1L", image: "milk1l.jpg", price: 1.09 },
                { id: 17, name: "Jogurt 200g", image: "yogurt200g.jpg", price: 0.69 },
                { id: 18, name: "Sir Edamer 300g", image: "edamer300g.jpg", price: 3.99 },
                { id: 19, name: "Maslac 250g", image: "butter250g.jpg", price: 2.29 },
                { id: 20, name: "Svježi sir 500g", image: "freshcheese500g.jpg", price: 2.99 }
            ]
        },
        {
            id: 5,
            name: "Voće",
            products: [
                { id: 21, name: "Jabuke 1kg", image: "apples1kg.jpg", price: 1.49 },
                { id: 22, name: "Banane 1kg", image: "bananas1kg.jpg", price: 1.29 },
                { id: 23, name: "Naranče 1kg", image: "oranges1kg.jpg", price: 1.79 },
                { id: 24, name: "Grožđe 500g", image: "grapes500g.jpg", price: 2.49 },
                { id: 25, name: "Limuni 500g", image: "lemons500g.jpg", price: 1.99 }
            ]
        },
        {
            id: 6,
            name: "Povrće",
            products: [
                { id: 26, name: "Rajčice 500g", image: "tomatoes500g.jpg", price: 1.59 },
                { id: 27, name: "Krastavci 500g", image: "cucumbers500g.jpg", price: 0.99 },
                { id: 28, name: "Paprika 500g", image: "peppers500g.jpg", price: 1.89 },
                { id: 29, name: "Mrkva 1kg", image: "carrots1kg.jpg", price: 0.99 },
                { id: 30, name: "Luk 1kg", image: "onions1kg.jpg", price: 0.89 }
            ]
        },
        {
            id: 7,
            name: "Pića",
            products: [
                { id: 31, name: "Coca Cola 2L", image: "cola2l.jpg", price: 2.29 },
                { id: 32, name: "Mineralna voda 1.5L", image: "water1.5l.jpg", price: 0.69 },
                { id: 33, name: "Sok naranča 1L", image: "orangejuice1l.jpg", price: 1.49 },
                { id: 34, name: "Ledeni čaj 1.5L", image: "icetea1.5l.jpg", price: 1.79 },
                { id: 35, name: "Energetski napitak 250ml", image: "energy250ml.jpg", price: 1.29 }
            ]
        },
        {
            id: 8,
            name: "Tjestenina",
            products: [
                { id: 36, name: "Špageti 500g", image: "spaghetti500g.jpg", price: 0.99 },
                { id: 37, name: "Penne 500g", image: "penne500g.jpg", price: 0.99 },
                { id: 38, name: "Fusilli 500g", image: "fusilli500g.jpg", price: 1.09 },
                { id: 39, name: "Lazanje 250g", image: "lasagna250g.jpg", price: 1.49 },
                { id: 40, name: "Gnocchi 500g", image: "gnocchi500g.jpg", price: 1.79 }
            ]
        },
        {
            id: 9,
            name: "Začini",
            products: [
                { id: 41, name: "Sol 250g", image: "salt250g.jpg", price: 0.59 },
                { id: 42, name: "Papar 50g", image: "pepper50g.jpg", price: 1.99 },
                { id: 43, name: "Vegeta 250g", image: "vegeta250g.jpg", price: 2.49 },
                { id: 44, name: "Češnjak u prahu 50g", image: "garlicpowder50g.jpg", price: 1.59 },
                { id: 45, name: "Origano 20g", image: "oregano20g.jpg", price: 1.29 }
            ]
        },
        {
            id: 10,
            name: "Ulje",
            products: [
                { id: 46, name: "Suncokretovo ulje 1L", image: "sunfloweroil1l.jpg", price: 2.29 },
                { id: 47, name: "Maslinovo ulje 500ml", image: "oliveoil500ml.jpg", price: 4.99 },
                { id: 48, name: "Bučino ulje 250ml", image: "pumpkinoil250ml.jpg", price: 5.99 },
                { id: 49, name: "Kikiriki ulje 500ml", image: "peanutoil500ml.jpg", price: 3.49 },
                { id: 50, name: "Ulje za prženje 1L", image: "fryingoil1l.jpg", price: 2.79 }
            ]
        }
    ]
};

module.exports = data;
