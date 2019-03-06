'use strict'
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect("mongodb://testUser:testUser@cluster0-shard-00-00-twf8g.mongodb.net:27017," +
    "cluster0-shard-00-01-twf8g.mongodb.net:27017,cluster0-shard-00-02-twf8g.mongodb.net:27017/testing?" +
    "ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", { useNewUrlParser: true });


var app = express();


//middleware
//middlewares are run in sequence
app.use(morgan('dev'));//morgan logs the calls to the routes
app.use(bodyParser.json());//parsing the json object

//routes
app.use('/users', require('./routes/users'));

//start the server 
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Express server is listening on port", port);
})