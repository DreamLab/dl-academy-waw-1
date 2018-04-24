const uuidv4 = require('uuid/v4');

class Storage {

	constructor () {
		this.messages = [];
		this.users = [];
	}

	saveMessage(username, body) {
		const message = {
			username: this._escape(username),
			body: this._escape(body),
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
			const escapedUsername = this._escape(username);
			this.users.push(escapedUsername);
			return escapedUsername;
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
	
	_escape(string) {
		return string
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	}
}




module.exports = Storage;