const { esQueryBuilder, pgQueryBuilder } = require('../utils/queryBuilder');
const { executeEsQuery, executePgQuery } = require('../utils/queryExecuters');

module.exports = function (app) {
	app.post('/users', (req, res) => {
		// localhost:4000/products?page=0&phrase=Book&category=books&sort[type]=asc
		console.log(req.body)
		return res.send({message: 'ok'})
	})
}
