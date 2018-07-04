const elasticsearch = require('elasticsearch');

const esClient = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
});

const search = (index, body) => {
    return esClient.search({index: index, body: body})
};

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
    indexData
}