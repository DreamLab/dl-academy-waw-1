const uuidv4 = require('uuid/v4');

class Storage {

	constructor () {
		this.chat = {
			messages: [],
			users: []
		}
	}

	saveMessage(sender, body) {
		this.chat.messages.push({
			sender: sender,
			body: body,
			timestamp: Date.now(),
			id: uuidv4()});
	}

	getMessages() {
		return this.chat.messages;
	}

	connect(username) {
		const index = this.chat.users.indexOf(username);
		if (index === -1) {
			this.chat.users.push(username);
			return username;
		}
	}

	disconnect(username) {
		const index = this.chat.users.indexOf(username);
		if (index !== -1) {
			this.chat.users.splice(index, 1);
			return username;
		}
	}

	getUsers() {
		return this.chat.users;
	}
}




module.exports = Storage;