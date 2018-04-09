const _ = require('lodash');

const ClientHandler = require('./lib/ClientHandler');
const FileReader = require('./lib/FileReader');

const CLIENTS_PER_SERVER = 3;
const clients = [];

_.forEach(FileReader.read('clients.txt'), clientAddress => {
	for (let i = 0; i < CLIENTS_PER_SERVER; i++) {
		clients.push(new ClientHandler(clientAddress));
	}
});

_.forEach(clients, client => client.run());


