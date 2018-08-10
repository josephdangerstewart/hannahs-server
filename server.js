var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get(/images\/(.+)/, (request, response) => {
	const path = request.params[0];
	response.redirect('https://res.cloudinary.com/josephdangerstewart/image/upload/v1533859031/hannahs-site/' + path);
});

app.use(express.static(__dirname + '/../hannahs_server/dist'));

app.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', 'GET');
	response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

	next();
});

app.route("*").get((request, response) => {
	response.redirect('/');
});

module.exports = app;
