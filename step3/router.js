const ChatController = require('./chat/ChatController');
const chatController = new ChatController();
const router = require('express').Router();

router.get('/messages', chatController.getMessages);
router.get('/users', chatController.getUsers);

router.post('/messages', chatController.saveMessage);
router.post('/connect', chatController.connect);
router.post('/disconnect', chatController.disconnect);

module.exports = router;