var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose   = require('mongoose');



var connectionString =process.env.MONGODB_URI || 'mongodb://localhost:27017/local';

mongoose.connect(connectionString);
mongoose.connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
    
  });
  
  mongoose.connection.on("error", function(err) {
    console.log("Could not connect to mongo server!");
    return console.log(err);
  });


 

var app = express();
//app.use is middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'jade');
 

app.use('/', indexRouter);
app.use('/users', usersRouter);

   

//var port = process.env.PORT || 3000;   
//app.listen(port);
//console.log('Magic happens on port ' + port);
module.exports = app;
