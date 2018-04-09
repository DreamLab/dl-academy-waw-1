const uuidv4 = require('uuid/v4');

class Storage {

	constructor () {
			this.messages = [];
			this.users = [];
	}

	saveMessage(username, body) {
		this.messages.push({
			username: username,
			body: body,
			timestamp: Date.now(),
			id: uuidv4()});
	}

	getMessages() {
		return this.messages;
	}

	connect(username) {
		const index = this.users.indexOf(username);
		if (index === -1) {
			this.users.push(username);
			return username;
		}
	}

	disconnect(username) {
		const index = this.users.indexOf(username);
		if (index !== -1) {
			this.users.splice(index, 1);
			return username;
		}
	}

	getUsers() {
		return this.users;
	}
}




module.exports = Storage;