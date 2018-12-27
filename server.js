var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

const emailUser = 'lmcajosephstewart@gmail.com';
const emailPass = 'jhst3782';

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: emailUser,
		pass: emailPass,
	}
});

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get(/images\/(.+)/, (request, response) => {
	const path = request.params[0];
	response.redirect('https://res.cloudinary.com/josephdangerstewart/image/upload/v1533859031/hannahs-site/' + path);
});

app.use(express.static(__dirname + '/../hannahs_server/dist'));

app.post('/contact-form', (request, response) => {
	const mailOptionsClient = {
		from: emailUser,
		to: request.body.email,
		subject: 'MLC Designs',
		html: `<p><strong>Name:</strong> ${request.body.name}<br/><strong>Message:</strong> ${request.body.message}</p>`
	}

	transporter.sendMail(mailOptionsClient, err => {
		if (err) response.redirect('/error.html');
		else response.redirect('/success.html');
	});
})

app.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', 'GET');
	response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

	next();
});

app.route("*").get((request, response) => {
	response.redirect('/');
});

app.listen(process.env.PORT || 8084)
