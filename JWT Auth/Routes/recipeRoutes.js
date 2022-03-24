const express = require("express");
const {allRecipe} = require('../Controllers/recipeHandler')
const router = express.Router()

router.get('/',allRecipe)

module.exports=router;