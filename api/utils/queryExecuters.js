const { search } = require('../esService');

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

module.exports = { 
  executeEsQuery,
  //executePostgresQuery
};