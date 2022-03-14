const mongodbUrl = require("../../env");
const Blog = require("./models/blogs");
const moongose = require("mongoose");

moongose
  .connect(mongodbUrl)
  .then((result) => {
    console.log("server connected");
  })
  .catch((err) => {
    console.log(err);
  });

const allBlogs = () => {
  return Blog.find().sort({ updatedAt: -1 });
};
const newBlog = (blog) => {
  const newblog = new Blog(blog);
  return newblog.save();
};
const getBlog = (id) => {
  // console.log(id)
  return Blog.findById(id);
};
const deleteBlog = (id) => {
  console.log(id);
  return Blog.findByIdAndDelete(id);
};
module.exports = { newBlog, deleteBlog, allBlogs, getBlog };
