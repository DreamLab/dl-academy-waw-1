const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
app.use((req, res) => {
	res.status(404).send({ error: 'Not found'});
});
app.listen(3000, () => console.log('App listening on port 3000!'));

module.exports = app;