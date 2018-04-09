const router = require('express').Router();

router.get('/helloWorld', (req, res) => {
	return res.status(200).json({name: req.query.name});
});

module.exports = router;