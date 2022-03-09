const express = require('express');
const morgan = require('morgan')
// express app

const app = express();


app.set('view engine','ejs') // this set the view engine to ejs

// setting it to listen in port 3000

app.listen(3000);


// Middle wares can be setup anywhere in the server logic. Inm express app.use() function is a middle which able to handle the 404 error page. If a middle ware is placed after a request handles like for page, if the response is completed the middle ware next to the response handler won't be executed
// app.use((req,res,next)=>{
//     console.log("Hi there a request has been made");
//     next() // if a middle ware is executed, express won't go to the next function automatically, we have to tell the express to move by simply calling the next function which passed as a parameter to the use function.
// })

// There are n number external middle wares available for unique purposes

// Morgan is a middle ware used for logging purposes

app.use(morgan('dev')) // this log the request details in the console based on the parameter passed. like "GET / 304 49.834 ms - -" 



// setting up the static files.

 app.use(express.static('public'))





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