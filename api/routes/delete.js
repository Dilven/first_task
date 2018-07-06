const { deleteData } = require('../esService');

module.exports = function (app) {
	// localhost:4000/delete
	// params id and index 
	app.post('/delete', (req, res) => {
        const { id, index } = req.body;
        
		if (!id || !index) {
			return res.status(500).send({message: 'id and index params required'})
		}
		return deleteData(index, 'entries', id)
			.then(() => {
				res.status(200).send({message: 'deleted'})
			})
	})
};