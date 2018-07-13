const { search } = require('../esService');
const { Client } = require('pg')

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
  
  const connectionString = 'postgresql://dilven:password@localhost/shop';

  const client = new Client({
    connectionString: connectionString,
  })

  return client.connect()
    .then(() => {
      return client.query(query);
    })
    .then((results) => {
      client.end();
      return results;
    })
    
}

module.exports = { 
  executeEsQuery,
  executePgQuery
};