var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app_original = express();

// view engine setup
app_original.set('views', path.join(__dirname, 'views'));
app_original.set('view engine', 'jade');

app_original.use(logger('dev'));
app_original.use(express.json());
app_original.use(express.urlencoded({ extended: false }));
app_original.use(cookieParser());
app_original.use(express.static(path.join(__dirname, 'public')));

app_original.use('/', indexRouter);
app_original.use('/users', usersRouter);

// catch 404 and forward to error handler
app_original.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app_original.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app_original;

// End of file