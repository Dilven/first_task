const { search } = require('../esService');

module.exports = function (app) {
	app.get('/search', (req, res) => {
		// localhost:4000/search?page=0&phrase=Book&category=books&filter[type]=book
		let { 
			phrase, page = 0,
			category,
			sort: sortFromQuery = {}
		} = req.query;

		const query = phrase ? {
			bool : {
			  must : {
				multi_match : {
				  query : phrase,
				  fields : [ 'name' ],
				  fuzziness : 2
				}
			  },
			  filter: []
			}
		  } : {
			bool : {
			  must : {
				match_all : {}
			  },
			  filter: []
			}
		  };
			
		  if (category) {
			query.bool.filter.push(
				{ term : { "categoryName" : category }}
			);
			}
			const size = 5;
			page = parseInt(page);
			const from = !page ? 0 : (page === 0 ? 0 : size * page);
			const sort = { "name": { "order": "asc" }}
		  const body = {
				sort,
				query,
			  size,
			  from
			}

			return search('products', body)
				.then(results => {
					const total = results.hits.total;
					const took = results.took;
					const products = results.hits.hits.map(result => result._source);
					return res.send({products, total, took})
				})
	});
};
