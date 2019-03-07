const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

/*
* this file creates a schemas and a model for different endpoints
*/

//create a schema //find{}
const userSchema = new Schema({
    activity_datetime: {
        type: String,
        //default: Date.now,
        required: true,
        
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    } , 
    max_attendance: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
});




//create a model
//first arguement is name of our model(always use a singular)
//mongoose takes the name and makes it plural
//second arguement is the schema we created 
const Activity = mongoose.model('activity', userSchema)
//export the model
module.exports = Activity;
