'use strict';

var express = require("express");
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;


const uri = "mongodb://testUser:testUser@cluster0-shard-00-00-twf8g.mongodb.net:27017," +
    "cluster0-shard-00-01-twf8g.mongodb.net:27017,cluster0-shard-00-02-twf8g.mongodb.net:27017/test?" +
    "ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

// GET /users
router.get('/', function(req, res) {
    // Return a welcome note
    res.json({ title: 'Welcome to UNI' });
});


//POST /Users
//Route for creating new users upon sign in
router.post("/signup", function(req , res) {
    var i = 0;
    var found = false;
    var responseVar = false;

    //make sure the email is '@myumanitoba.ca
    while (found == false && i < req.body.email.length) {
        if (req.body.email.charAt(i) == '@') {
            var str = req.body.email.substring(i, req.body.email.length);
            if (str == "@myumanitoba.ca") {
                MongoClient.connect(uri, function(err, client) {
                    const collection = client.db("Uni-Development").collection("users");
                    collection.insertOne(req.body, function(err, result) {
                        if (result.insertedCount > 0) {
                            console.log("1 document inserted...");
                            responseVar=true;
                        }
                        else
                        {
                            console.log("Document insert unsuccessful");
                        }
                        res.json({success: responseVar,
                                  info: "success",
                                  body:req.body});

                        client.close();
                    });
                });
            } else {
                res.json({success: responseVar,
                    info:"Enter a valid @myumanitoba.ca email address",
                    body: req.body});
            }
        }
        i++;
    }
});

// GET /users/login
// Route to login
router.get('/login', function(req, res) {
    // let result = retrieve(user)
    MongoClient.connect(uri, function(err, client) {
        const collection = client.db("Uni-Development").collection("users");
        if (("userName" in req.body) && ("password" in req.body)){
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
        }
        else{
            res.json({userName: null});
        }
    });

});

module.exports = router;