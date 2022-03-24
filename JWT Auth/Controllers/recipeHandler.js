const allRecipe = (req,res,next)=>{
    res.render('recipes',{title:"All Recipes"})
}

module.exports={
    allRecipe
}