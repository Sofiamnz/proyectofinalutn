var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config(); //me permite utilizar variables de entorno en cualquier ruta
const session = require("express-session");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const registro = require('./routes/registro');
const reservas = require('./routes/reservas');
const cabañas = require('./routes/cabañas');
const login = require('./routes/login');
const home = require('./routes/home');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
  secret : 'password_SECRETO',
  cookie : {maxAge: null},
  resave: true,
  saveUninitialized: false,
})
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/registro', registro);
app.use('/reservas', reservas);
app.use('/cabañas', cabañas);
app.use("/login", login);
app.use("/home", home);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
