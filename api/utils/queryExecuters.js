const { search } = require('../esService');
const { client } = require('../pgService')

const executeEsQuery = (body) => {
  return search('products', body)
  .then(results => {
    const total = results.hits.total;
    const took = results.took;
    const numberProductsToDisplay = results._shards.total;
    const products = results.hits.hits.map(result => result._source);
    return({products, total, took, numberProductsToDisplay})
  });
};

const executePgQuery = (query) => {
  


  const products = client.connect()
    .then(() => {
      return client.query(query.sql, query.values);
    })
    .then((results) => {
      return results;
    })
  const total = products
    .then(() => {
      const sql = query.category ? 
        'SELECT count(*) FROM products WHERE category_name=$1' 
        : 'SELECT count(*) FROM products';
      if(query.category) {
        return client.query(sql, [query.category]);
      }
      return client.query(sql);
    })
    .then(results => {
      return results
    })

  return Promise.all([products, total])
    .then((results) => {
      client.end()
      return results;
    })
    
}

module.exports = { 
  executeEsQuery,
  executePgQuery
};