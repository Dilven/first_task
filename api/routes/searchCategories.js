const { search } = require('../esService');

module.exports = function (app) {
	app.get('/categories', (req, res) => {
		const body = {
			query: {
                match_all: {}
            }
		}

			return search('categories', body)
				.then(results => {
					const total = results.hits.total;
					const took = results.took;
					const categories = results.hits.hits.map(result => result._source);
					return res.send({categories, total, took})
				})
	});
};
