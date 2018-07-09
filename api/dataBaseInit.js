const { indexData, initMapping } = require('./esService');
const productsMock = require('./mock/products');
const categoriesMock = require('./mock/categories');

productsMock.map(product => {
  indexData('products', 'entries', product.id, product);
});

categoriesMock.map(category => {
  indexData('categories', 'entries', category.id, category);
});

initMapping('categories', 'entries', {
  properties: {
    name: { 
      'type': "text",
      "fielddata": true
    },
  }
});

initMapping('products', 'entries', {
  properties: {
    name: { 
      'type': "text",
      "fielddata": true,
      
    },
    categoryName: { 
      'type': "text",
      "fielddata": true
    },
  }
});