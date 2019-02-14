'use strict'

var express = require("express");
var router = express.Router();

router.get("/", function(req , res)
{
    res.json({
        responce: "you sent me a POST request"
    });
});


//POST /Users
//Route for creating new users upon sign in
router.post("/signup", function(req , res)
{   
    var i = 0;
    var found = false;

    //make sure the email is '@myumanitoba.ca
    while(found == false && i < req.body.email.length)
    {
        if(req.body.email.charAt(i) == '@'){
            var str = req.body.email.substring(i, req.body.email.length);
            if(str == "@myumanitoba.ca"){
                res.json({
                responce: "you sent me a POST request",
                body: req.body
                })
            }
            else 
            {
                res.send("Enter a valid myumanitoba.ca email address");
                
            }
    
        }

        i++;
    }
    

});

module.exports = router;