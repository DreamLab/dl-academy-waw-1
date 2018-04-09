const uuidv4 = require('uuid/v4');

class Storage {

	constructor () {
		this.messages = [];
		this.users = [];
	}

	saveMessage(username, body) {
		const message = {
			username: username,
			body: body,
			timestamp: Date.now(),
			id: uuidv4()
		};
		this.messages.push(message);
		return message;
	}

	getMessages() {
		return this.messages;
	}

	connect(username) {
		const isUserConnected = this.users.includes(username);
		if (!isUserConnected) {
			this.users.push(username);
			return username;
		}
		return false;
	}

	disconnect(username) {
		const index = this.users.indexOf(username);
		if (index !== -1) {
			this.users.splice(index, 1);
			return username;
		}
		return false;
	}

	getUsers() {
		return this.users;
	}
}




module.exports = Storage;