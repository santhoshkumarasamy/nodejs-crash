const express = require("express");

const router = express.Router()

router.get('/',(req,res,next)=>{
    res.render('recipes',{title:"All Recipes"})
})

module.exports=router;