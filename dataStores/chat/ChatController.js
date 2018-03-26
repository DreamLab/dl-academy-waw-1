const storage = require('../dataStores/Storage');

class ChatController {

	getMessages(req, res) {
		return res.status(200).json({messages: storage.messages});
	}

	saveMessage(req, res) {
		storage.messages.push(req.body.username);
		return res.status(200).send();
	}

	connect(req, res) {
		storage.users.push(req.body.username);
		return res.status(200).send();
	}

	disconnect(req, res) {
		const index = storage.users.indexOf(req.body.username);
		if (index !== -1) {
			storage.users.splice(index, 1);
			return res.status(200).send();
		}
		return res.status(400).send();
	}

	getUsers(req, res) {
		return res.status(200).json({users: storage.users});
	}
}
module.exports = ChatController;