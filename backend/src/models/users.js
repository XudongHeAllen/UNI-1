const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

/*
* this file creates a schemas and a model for different endpoints
*/

//create a schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true //mongoose is case sensitive
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true //mongoose is case sensitive
    },
    password: {
        type: String,
        required: true
    },
    my_activities: {
        type: Array
    }
});

userSchema.pre('save', async function(next) {
    try {
        //generate a salt
        const salt = await bcrypt.genSalt(10);
        //generate password hash(salt + hash)
        const passwordHash = await bcrypt.hash(this.password, salt);
        //re-assign hashed version over original, plain text password
        this.password = passwordHash;
        next();
    } catch(error) {
        next(error);
    }
});

//validates password
userSchema.methods.isValidPassword = async function(newPassword, res) {
    try {
        return await bcrypt.compare(newPassword, this.password );
    } catch(error) {
        throw new Error(error);
    }
}



//create a model
//first arguement is name of our model(always use a singular)
//mongoose takes the name and makes it plural
//second arguement is the schema we created 
const User = mongoose.model('user', userSchema)
//export the model
module.exports = User;
