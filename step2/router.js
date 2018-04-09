const router = require('express').Router();

const ChatController = require('../step2/chat/ChatController');
const chatController = new ChatController();

router.get('/messages', chatController.getMessages);

module.exports = router;