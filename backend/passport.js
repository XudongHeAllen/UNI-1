const passport = require('passport');
const JwrStrategy = require('passport-jwt').Strategy;
const { ExtractJwt} = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const {JWT_SECRET} = require('./configuration');
const User = require('./models/users');

//JSON WEB TOKEN STRATEGY
passport.use( new JwrStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        //find the user specified token
        //if user doesnt exist, handle it
        const user = await User.findById(payload.sub);
        if(!user) {
            return done(null, false, {message: "Unknown user"});
        }
        //otherwise, return the user
        done(null, user);
    } catch(error) {
        done(error,  false);
    }
}));


//LOCAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        //find the user given the email 
        const user = await User.findOne({email: email});
        //if not, handle it
        if(!user) {
            return done(null, false, {message: "User with specified email does not exist."});
        }

        //check if the password is correct
        const isMatch = await user.isValidPassword(password);

        //if not, handle it
        if(!isMatch) {
            return done(null, false, {message: "Incorrect password."});
        }


        //otherwise, return the user
        done(null, user, {message: "successfully logged in."});
    } catch (error) {
        done(error, false);
    }

}));