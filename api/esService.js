const elasticsearch = require('elasticsearch');

const esClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'error'
});

const search = (index, body) => {
    return esClient.search({index: index, body: body})
};

const initMapping = (index, type, body) => {  
    return esClient.indices.putMapping({
        index,
        type,
        body
	}, (error, response) => {
		if (error) {
			console.log(error);
		} else {
			console.log(response);
		}
	});
}

const indexData = (index, type, id, body) => {
	return esClient.index({
	  index : index,
	  type : type,
	  id : id,
	  body : body
	});
};

module.exports = {
    search,
	indexData,
	initMapping
}