const router = require('express').Router();

const chatController = new(require('../step2/chat/ChatController'));

router.get('/messages', chatController.getMessages);

module.exports = router;