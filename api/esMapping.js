const { indexData, initMapping } = require('./esService');

initMapping('categories', 'entries', {
  properties: {
    name: { 
      "type": "text",
      "fielddata": true
    },
  }
});

initMapping('products', 'entries', {
  properties: {
    name: { 
      "type": "text",
      "fielddata": true
      
    },
    categoryName: { 
      "type": "text",
      "fielddata": true
    },
    price: {
      'type': 'float',
    }
  }
});