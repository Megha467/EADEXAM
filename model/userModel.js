const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({fullname: {type: String, required: true, unique: true}, 
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    country: {type: String, required: true},
    state: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    zipcode: {type: String, required: true},
    image: {type:String}
})

const User = mongoose.model('User', UserSchema)

module.exports = User;
