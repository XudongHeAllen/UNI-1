'use strict';

var express = require('express');
var router = express.Router();
//var insert = require('./database');

const uri = "mongodb://testUser:testUser@cluster0-shard-00-00-twf8g.mongodb.net:27017," +
    "cluster0-shard-00-01-twf8g.mongodb.net:27017,cluster0-shard-00-02-twf8g.mongodb.net:27017/test?" +
    "ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

var MongoClient = require('mongodb').MongoClient;

// GET /users
router.get('/', function(req, res) {
    // Return a welcome note
    res.json({ title: 'Welcome to UNI' });
});

// GET /users/login
// Route to login
router.get('/login', function(req, res) {
    // let result = retrieve(user)
    MongoClient.connect(uri, function(err, client) {
        const collection = client.db("Uni-Development-prod").collection("users");
        collection.find(req.body).toArray(function(err, result) {
            if (err)
                throw err;
            console.log(result);
            if (result.length>0)
                res.json({userName: result[0].userName});
            else {
                res.json({userName: null});
            }
            client.close();
        });
    });

});

//GET /users/signUp
// Route to signUp
router.get('/signUp', function(req, res) {
    var responseVar = false;
    MongoClient.connect(uri, function(err, client) {
        const collection = client.db("Uni-Development-prod").collection("users");
        collection.insertOne(req.body, function(err, result) {
            if (err)
                throw err;
            if (result.insertedCount > 0) {
                console.log("1 document inserted");
                responseVar=true;
            }
            else
                {
                    console.log("Document insert unsuccessful");
                }
            res.json({success: responseVar});
            client.close();
        });
    });
});

module.exports = router;