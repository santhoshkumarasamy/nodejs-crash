const User = require('./models/User')
const createUser = async (name,email,password)=>{
    // console.log(name,email,password)
   const user = await User.create({name,email,password})
   return user
}

module.exports ={
    createUser
}