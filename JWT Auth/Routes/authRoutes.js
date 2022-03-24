const express = require("express")
const router = express.Router()
const {loginPage,loginHandler,signUpPage,signUpHandler}= require('../Controllers/authHandlers')

//get routes

router.get('/login',loginPage)
router.get('/signup',signUpPage)

//post routes

router.post('/login',loginHandler)
router.post('/signup',signUpHandler)


module.exports= router