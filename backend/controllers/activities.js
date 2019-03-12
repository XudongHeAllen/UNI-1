const JWT = require('jsonwebtoken');
const User = require('../models/users');
const Activity = require('../models/activities');
const { JWT_SECRET } = require('../configuration');
const passport = require('passport');

const ObjectId = require('mongoose').Types.ObjectId;




module.exports = {

    activities: async (req, res , next) => {
        await Activity.find({}, function(err, activities) {
            if(err) {
                res.json({
                    success: false,
                    info: 'something went really wrong!'
                });
                next();
            }
            res.json({
                success: true,
                info: "Successfully retrieved all activities",
                activities: activities
            });
        });   
    },

    activityId: async (req, res, next) => {
        const query = {_id: new ObjectId(req.params.id)};
        await Activity.find(query, function (err, activity){
            if(err) {
                res.json({
                    success: false,
                    info: "Something went terribly wrong"
                });
                next();
            }
            res.json({
                success: true,
                info: "Successfully found required activity",
                activity: activity
            })
        })
    },

    activityCreateId: async (req, res, next) => {
        passport.authenticate('jwt', {session: false}, async (err, user, info) => {
            const data = req.body;
            await Activity.create(data, function (db_err, db_response) {
                if(db_err) {
                    res.json({
                        success: false,
                        info: "Database error Adding the activity was unsuccessful."
                    });
                    next();
                }
                else if (err){
                    return res.status(500).json({
                        success:false,
                        info: err
                    });
                }
                else if (!user) {
                    return res.status(401).json({
                        success: false,
                        user: user,
                        info: info.message
                    });
                }
                else {
                    res.json({
                        success: true,
                        info: "Activity added successfully",
                        activity: {id: db_response.id}
                    })
                }
            })
        })(req, res, next);
    }
}