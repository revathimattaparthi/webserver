var express = require('express');

var app = express();

var PORT = 8080;

var middleware = {
	
	requireAuthentication: function(req,res,next){

		console.log('Private' );
		next();
	},

	logger: function(req,res,next){

		console.log('Request: ' + new Date().toString()+ ' ' + req.method+ ' ' + req.originalUrl);

		next();
}
};
app.use(middleware.logger);

//about
app.get('/about', middleware.requireAuthentication, function(req,res){

	res.send('It is About page !!!!!');
});



app.use(express.static(__dirname + '/html'));

app.listen(PORT, function(){

	console.log(' server started ' + PORT + '!');
});

