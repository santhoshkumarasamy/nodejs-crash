const User = require('./models/User')
const createUser = async (name,password,email)=>{
   const user = await User.create({name,email,password})
   return user
}

module.exports ={
    createUser
}