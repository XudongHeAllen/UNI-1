const JWT = require('jsonwebtoken');
const User = require('../models/users');
const { JWT_SECRET } = require('../configuration');

signToken = user => {
    return JWT.sign({
        iss: 'UNI', //issuer
        sub: user.id, //subject
        iat: new Date().getTime(), //(issued at) current time
        exp: new Date().setDate(new Date().getDate() + 1) // ( expiry date) current time + 1 day
    }, JWT_SECRET);
}


module.exports = {
    //exports a username,  email and password from all new users
    signUp: async (req, res , next) => {
        
       const {username, email, password}= req.value.body;

        //check for users with the same email
        //check for users with the same email
        const foundUserName = await User.findOne({ username: username});
        const foundUserEmail = await User.findOne({ email: email});

        if(foundUserName && foundUserEmail) {
            return res.status(403).json({error: 'Username annd Email address already exist'});

        } else if(foundUserName) {
            return res.status(403).json({error: 'Select a new username, this username already exist'});
        } else if(foundUserEmail) {
            return res.status(403).json({error: 'Email address already exist'});
        } 

       //create new user if username and email is specific
       const newUser = new User({
           username: username,
           email: email,
           password: password
       });


       await newUser.save();


       //respond with token instead of json
       //res.json({user: 'successfully created'});
       
       //generate the token
       const token = signToken(newUser);
       res.status(200).json({
            user: 'new user successfully created',
            token: token
        });
    },

    signIn: async (req, res , next) => {
        //generate a token to validate 
        const token = signToken(req.user);
        res.status(200).json({token});
    },

    secret: async (req, res , next) => {

        // passport.authenticate('jwt', {session: false}, (err, user, info) => {
        //     if (err || !user) {
        //         return res.status(400).json({
        //             message: 'Something is not right',
        //             user   : user
        //         });
        //     }});
        console.log('I managed to get here');
        res.json({ secret: "resource"});
    }
}