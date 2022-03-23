const express = require('express')
const morgan = require("morgan")
const recipeRouter = require('./Routes/recipe')
const app = express()


app.set("view engine","ejs")

app.listen(3000)
app.use(morgan('tiny'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res,next)=>{
    res.render('index',{title:"Home"})
})
app.use("/recipes",recipeRouter);

//404

app.use((req,res)=>{
    res.status(404).render("404",{title:"404"})
})