const express = require('express');

// express app

const app = express();


app.set('view engine','ejs') // this set the view engine to ejs

// setting it to listen in port 3000

app.listen(3000);

//setting routing
app.get('/',(req,res)=>{

    // if the file we send is created from a view engine we have to use render function to send details
    res.render('index',{title:"Home"}) // we can pass values for a ejs file by sending an object in the render function, the values can be directly accessed by the key alone
})
app.get('/about',(req,res)=>{
   res.render('about',{title:"About"})
})



app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:"Create"})
})
//redirects

// app.get('/about-us',(req,res)=>{
//     res.redirect('/about')
// })

// 404

app.use((req,res)=>{ //this method will be fired whenever the execution reaches hear, when request is made express will check for the url requested, if non of the above url are matched before this function, this response will we triggered. When a response is triggered express doesn't execute the code below the response function so th 404 (use function) should be at the bottom
    res.status(404).render('404',{title:"404"})
})