const { indexData } = require('../esService');
const productsMock = require('../mock/products');
const categoriesMock = require('../mock/categories');

// module.exports = (app) => {
//     app.get('/indexData', (req, res) => {
//         return Promise.map(productsMock, product => {
//             return indexData('products', 'entries', product.id, product);
//         })
//         .then(() => {
//             return Promise.map(categoriesMock, category => {
//                 return indexData('categories', 'entries', category.id, category);
//             })
//         })
//         .then(() => {
//             res.status(200).send({ message: 'succes'});
//         })  
//     });
// };


