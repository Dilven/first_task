const { search } = require('../esService');
const { pool } = require('../pgService')

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
  const products = pool.query(query.sql, query.values)
    .then((results) => {
      return results;
    })
  const total = products
    .then(() => {
      const sql = query.category ? 
        'SELECT count(*) FROM products WHERE category_name=$1' 
        : 'SELECT count(*) FROM products';
      if(query.category) {
        return pool.query(sql, [query.category]);
      }
      return pool.query(sql);
    })
    .then(results => {
      return results
    })

  
  return Promise.all([products, total])
    .then((results) => {
      return results;
    })
}

module.exports = { 
  executeEsQuery,
  executePgQuery
};