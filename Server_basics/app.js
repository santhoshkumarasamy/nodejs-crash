const express = require("express");
const morgan = require("morgan");
const blogRoutes = require('./Routes/blogRoutes')

const app = express();

app.set("view engine", "ejs"); 

app.listen(3000);
app.use(morgan("dev")); 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.use(blogRoutes)
//404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
