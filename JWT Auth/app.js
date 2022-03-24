//packages
const express = require('express')
const mongoose = require('mongoose')
const morgan = require("morgan")

//routers 
const recipeRouter = require('./Routes/recipeRoutes')
const authRouter = require('./Routes/authRoutes')

const dbURL = require('../env')



const app = express()


app.set("view engine","ejs")


app.use(morgan('tiny'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

mongoose.connect(dbURL)
.then((result)=>{
    app.listen(3000)
})
.catch(err=>console.log(err))

app.get('/',(req,res,next)=>{
    res.render('index',{title:"Home"})
})
app.use("/recipes",recipeRouter);
app.use('/auth',authRouter)
//404

app.use((req,res)=>{
    res.status(404).render("404",{title:"404"})
})