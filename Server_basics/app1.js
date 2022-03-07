const express = require('express');

// express app

const app = express();

// setting up the view engine

app.set('view engine','ejs') // this set the view engine to ejs

// app.set('views','htmlFiles') // by default the express will look for view templates in views folder to set to an some other folder this code is used.


// setting it to listen in port 3000

app.listen(3000);

//setting routing
app.get('/',(req,res)=>{
    // res.send('<p>Hi There</p>')
    res.sendFile('./htmlFiles/index.html',{root: __dirname}) //sendFile: function will take files from absolute path(meaning i.e it will take from computer folder path) so we have mention starting directory location where the files are
})
app.get('/about',(req,res)=>{
    res.sendFile('./htmlFiles/about.html',{root: __dirname})
})

//redirects

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

// 404

app.use((req,res)=>{ //this method will be fired whenever the execution reaches hear, when request is made express will check for the url requested, if non of the above url are matched before this function, this response will we triggered. When a response is triggered express doesn't execute the code below the response function so th 404 (use function) should be at the bottom
    res.status(404).sendFile('./htmlFiles/404.html',{root:__dirname})
})