const {
  allBlogs,
  newBlog,
  deleteBlog,
  getBlog,
} = require("../server/dbRequestHandler");

const express = require("express");
const router = express.Router();

router.get("/blogs", (req, res) => {
  allBlogs()
    .then((blogs) => {
      res.render("index", { title: "Home", blogs: blogs });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/404");
    });
});

router.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});


router.get("/blogs/:id", (req, res) => {
  getBlog(req.params.id)
    .then((blog) => {
      res.render("blog", { title: "Blog", blog: blog });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/404");
    });
});



router.post("/blogs", (req, res) => {
  var blog = req.body;
  newBlog(blog)
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/404");
    });
});

router.delete("/blogs/:id", (req, res) => {
  var id = req.params.id;
  deleteBlog(id)
    .then((result) => {
      res.json({
        redirect: "/blogs",
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router
