const Storage = require('../dataStores/Storage');
const storage = new Storage();

class ChatController {

	getMessages(req, res) {
		const messages = storage.getMessages();
		return res.status(200).json({messages});
	}

	saveMessage(req, res) {
		const message = storage.saveMessage(req.body.username, req.body.body);
		return res.status(200).json({message});
	}

	connect(req, res) {
		const connected = storage.connect(req.body.username);
		if (connected) {
			return res.status(200).json({connected});
		}
		return res.status(400).json({error: 'User is already connected.'});
	}

	disconnect(req, res) {
		const disconnected = storage.disconnect(req.body.username);
		if (disconnected) {
			return res.status(200).json({disconnected})
		}
		return res.status(400).send();
	}

	getUsers(req, res) {
		const users = storage.getUsers();
		return res.status(200).json({users});
	}
}
module.exports = ChatController;