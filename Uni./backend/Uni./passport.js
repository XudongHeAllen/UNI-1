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
            return done(null, false) ;
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
}, async ( email, password, done) => {
    try {
        //find the user given the email 
        const user = await User.findOne({email: email});
        //if not, handle it
        if(!user) {
            console.log('email is not valid');
            return done(null, false);
        }

        //check if the password is correct
        const isMatch = await user.isValidPassword(password);

        //if not, handle it
        if(!isMatch) {
            //res.json({user: 'this is wrong'});
            // res.status(200).json({
            //     email: 'please'
            // });
            console.log('password is not valid');
            return done(null, false);
        }


        //otherwise, return the user
         done(null, user);
    } catch (error) {
         done(error, false );
    }

}));