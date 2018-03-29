const ChatController = require('./chat/ChatController');
const router = require('express').Router();
const chatController = new ChatController();

router.get('/messages', chatController.getMessages);
router.get('/users', chatController.getUsers);

router.post('/messages', chatController.saveMessage);
router.post('/connect', chatController.connect);
router.post('/disconnect', chatController.disconnect);

module.exports = router;