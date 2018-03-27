const messagesController = new(require('../getMessages/messages/MessagesController'));
const router = require('express').Router();

router.get('/messages', messagesController.getMessages);
app.use(function(req, res) {
	res.status(404).send({ error: 'Not found'});
});

module.exports = router;