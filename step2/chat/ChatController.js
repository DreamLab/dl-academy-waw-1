const Storage = require('../dataStores/Storage');
const storage = new Storage();

class ChatController {

	getMessages(req, res) {
		const messages = storage.getMessages();
		return res.status(200).json({messages: messages});
	}

}

module.exports = ChatController;