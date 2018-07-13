const { esQueryBuilder, pgQueryBuilder } = require('../utils/queryBuilder');
const { executeEsQuery, executePgQuery } = require('../utils/queryExecuters');

module.exports = function (app) {
	app.get('/products', (req, res) => {
		// localhost:4000/products?page=0&phrase=Book&category=books&filter[type]=book
		if(process.env.DB_TYPE === "ES") {
			const query = esQueryBuilder(req);
			return executeEsQuery(query)
				.then((results) => {
					return res.status(200).send(results);
				});
		} else if (process.env.DB_TYPE === 'PG') {
			const query = pgQueryBuilder(req);
      return executePgQuery(query)
        .then((results) => {
					const { rows, rowCount } = results;
					const data = {
						products: rows,
						total: rowCount
					}
          return res.status(200).send(data);
				})
					
    } else {
      return res.status(500).send('Database error');
    }
	});
};
