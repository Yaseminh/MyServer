const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
})
const User = mongoose.model('User', userScheme)

module.exports = {User}