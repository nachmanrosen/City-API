var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose   = require('mongoose');
const passport = require('passport');
const UserModel = require('./model/model');

var connectionString =process.env.MONGODB_URI || 'mongodb://localhost:27017/local';

mongoose.connect(connectionString);
mongoose.connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
    
  });
  
  mongoose.connection.on("error", function(err) {
    console.log("Could not connect to mongo server!");
    return console.log(err);
  });

  mongoose.Promise = global.Promise;
  //require('./auth/auth');

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
//to register post  /users/signup
//to login post /users/login

//this  middleware makes our api require sending a query parameter called secret_token
//const secure = require('./routes/project_sources');
//app.use('/secret', passport.authenticate('jwt', { session : false }), secure );
/*
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error : err });
  });






router.use(function(req, res, next) {         //middleware
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});



/*router.get('/', function(req, res) {
    //res.json({ message: 'hooray! welcome to our api!' });  
    res.render('index.html'); 
});
router.get('/city', function(req, res) {
    res.json({ message: 'hooray! welcome to our city!' });  
}); 
   
*/
var port = process.env.PORT || 3000;   
app.listen(port);
console.log('Magic happens on port ' + port);
module.exports = app;
