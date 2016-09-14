var express = require('express');

var app = express();

var PORT = process.env.PORT || 8080;


var middleware = require('./middleware.js');

app.use(middleware.logger);

//about
app.get('/about', middleware.requireAuthentication, function(req,res){

	res.send('It is Aboutttttt pageeeeeeeeee !!!!!');
});


app.get('/aboutus', middleware.requireAuthentication, function(req, res){
	res.send('It is Aboutttttttt us pageeeeeeeeee !!!!!');

});
app.use(express.static(__dirname + '/html'));

app.listen(PORT, function(){

	console.log(' server started ' + PORT + '!');
});

