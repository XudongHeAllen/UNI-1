const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
* this file creates a schemas and a model for different endpoints
*/

//create a schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true //mongoose is case sensitive
    },
    password: {
        type: String,
        required: true
    } 
})

//create a model
//first arguement is name of our model(always use a singular)
//mongoose takes the name and makes it plural
//second arguement is the schema we created 
const User = mongoose.model('user', userSchema)
//export the model
module.exports = User;