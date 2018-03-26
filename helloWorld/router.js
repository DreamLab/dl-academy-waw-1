module.exports = function(app) {
	app.use('/helloWorld', (req, res) => {
		return res.status(200).json({name: req.query.name});
	});
	app.use(function(req, res) {
		res.status(404).send({ error: 'Not found'});
	});
};