const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const app = express();

app.listen(3001, () => console.log('App listening on port 3000!'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
app.use((req, res) => {
	res.status(404).send({ error: 'Not found'});
});

module.exports = app;