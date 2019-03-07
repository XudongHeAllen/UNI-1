const JWT = require('jsonwebtoken');
const User = require('../models/users');
const Activity = require('../models/activities');
const { JWT_SECRET } = require('../configuration');




module.exports = {

    activities: async (req, res , next) => {
        await User.find({}, function(err, users) {
            if(err) {
                res.json({
                    message: 'something went really wrong!'});
                next();
            }
            res.json(users);
        });   
    },

    
}