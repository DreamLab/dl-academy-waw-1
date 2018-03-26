const MessagesController = new(require('../getMessages/messages/MessagesController'));
const router = require('express').Router();

router.get('/messages', MessagesController.getMessages);
app.use(function(req, res) {
	res.status(404).send({ error: 'Not found'});
});

module.exports = router;