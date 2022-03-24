const mongoose = require('mongoose')
const {isEmail} =require('validator')

const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name cannot be empty"],
        minlength:[3,"Minimum length of the name is 3"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Please enter an email address"],
        lowercase:true,
        validate:[isEmail,'Please enter an valid email']
    },
    password:{
        type:String,
        required:true,
        minlength:[8,"Minimum length is 8 characters"]
    }
},{timestamps:true})

const User = mongoose.model('user',userSchema)

module.exports=User