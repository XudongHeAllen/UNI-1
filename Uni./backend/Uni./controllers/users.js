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
    //experts a user email and password from all new users
    signUp: async (req, res , next) => {
        
       const {email, password}= req.value.body;

       //check for users with thesame email
        const foundUser = await User.findOne({ email: email});
        if(foundUser) {
            return res.status(403).json({error: 'Email address already exist'});
        }
 

       //create new user if user email is specific
       const newUser = new User({
           email: email,
           password: password
       });
       await newUser.save();


       //respond with token instead of json
       //res.json({user: 'successfully created'});
       
       //generate the token
       const token = signToken(newUser);
       res.status(200).json({ token: token});
    },

    signIn: async (req, res , next) => {
        //generate a token to validate 
        console.log('UserController.signIn() called');
    },

    secret: async (req, res , next) => {
        console.log('UserController.secret() called');
    }
}