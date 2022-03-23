const {
  allBlogs,
  newBlog,
  deleteBlog,
  getBlog,
} = require("../server/dbRequestHandler");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  allBlogs()
    .then((blogs) => {
      res.render("index", { title: "Home", blogs: blogs });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/404");
    });
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create" });
});


router.get("/:id", (req, res) => {
  getBlog(req.params.id)
    .then((blog) => {
      res.render("blog", { title: "Blog", blog: blog });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/404");
    });
});



router.post("/", (req, res) => {
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

router.delete("/:id", (req, res) => {
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
