const storage = new(require('../dataStores/Storage'));

class ChatController {

	getMessages(req, res) {
		const messages = storage.getMessages();
		return res.status(200).json({messages: messages});
	}

}

module.exports = ChatController;