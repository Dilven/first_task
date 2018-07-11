const { esQueryBuilder } = require('../utils/queryBuilder')
const { executeEsQuery} = require('../utils/queryExecuters')

module.exports = function (app) {
	app.get('/search', (req, res) => {
		// localhost:4000/search?page=0&phrase=Book&category=books&filter[type]=book
		if(process.env.DB_TYPE === "ES") {
			const query = esQueryBuilder(req);
			return executeEsQuery(query)
				.then((results) => {
					return res.status(200).send(results);
				});
		} else if (process.env.DB_TYPE === 'PG') {
      console.log('postgres')
    } else {
      return res.status(500).send('Database error');
    }
	});
};
