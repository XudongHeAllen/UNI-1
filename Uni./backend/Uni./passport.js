const passport = require('passport');
const JwrStrategy = require('passport-jwt').Strategy;
const { ExtractJwt} = require('passport-jwt');

const {JWT_SECRET} = require('./configuration');
passport.use( new JwrStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretorkey: JWT_SECRET
}, async (payload, done) => {
    try {
        
    } catch(error) {
        done(error,  false);
    }

}))