const { indexData } = require('../esService');
const productsMock = require('../mock/products');
const categoriesMock = require('../mock/categories');
const Promise = require('bluebird');

module.exports = (app) => {
    app.get('/indexData', (req, res) => {
        return Promise.map(productsMock, product => {
            return indexData('products', 'entires', product.id, product);
        })
        .then(() => {
            return Promise.map(categoriesMock, category => {
                return indexData('category', 'entries', category.id, category);
            })
        })
        .then(() => {
            res.status(200).send({ message: 'succes'});
        })
    });
};


