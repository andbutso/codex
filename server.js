const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Set the port to 3001 for dev environment
app.set('port', (process.env.PORT || 3001));

// Connect Mongoose to MongoDB
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/test');

var connection = mongoose.connection;

// DB error handler
connection.on('error', console.error.bind(console, 'connection error:'));

// DB connection success
connection.on('connected', function() {
	console.log('database connected!');
});

app.get('/', function (req, res) {
	console.log('request to homepage')
});

// Tells the server to stay on and listen for requests on the port defined on line 7
app.listen(app.get('port'));

// Define a route that accepts a value passed from the client and prints it to backend console


app.get('/api/console', (req, res) => {
	// input value from the form
	var val = req.query;
	console.log('someone pushed the button!');
});





//this is where you add your database lookup stuff
//
//
//
