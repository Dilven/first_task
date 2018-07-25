const { esQueryBuilder, pgQueryBuilder } = require('../utils/queryBuilder');
const { executeEsQuery, executePgQuery } = require('../utils/queryExecuters');

module.exports = function (app) {
	app.get('/products', (req, res) => {
		// localhost:4000/products?page=0&phrase=Book&category=books&sort[type]=asc
		
		let isSearch = parseInt(req.query.normal);
		isSearch = Boolean(isSearch);

		if(isSearch) {
			const query = esQueryBuilder(req);
			return executeEsQuery(query)
				.then((results) => {
					return res.status(200).send(results);
				});
		} else {

		const query = pgQueryBuilder(req);
		return executePgQuery(query)
			.then(data => {
				const products = data[0].rows;
				const numberProductsToDisplay = data[0].rowCount;
				const total = data[1].rows[0].count
				const results = {
					products,
					total,
					numberProductsToDisplay
				}
				return res.status(200).send(results);
			})	
		}
	})
}
