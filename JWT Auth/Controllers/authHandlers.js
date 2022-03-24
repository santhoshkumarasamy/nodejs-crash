const { createUser } = require("../server/dbActions");

//validating functions

const handleError=(err)=>{
    let errors ={name:"",email:"",password:""}
    //validation errors
    if(err.message.includes("user validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] =properties.message
        })
    }
    return errors
}




//handlers


const loginPage = (req, res) => {
  res.render("login", { title: "Login" });
};
const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  res.send("Login");
};
const signUpPage = (req, res) => {
  res.render("signup", { title: "Sign Up" });
};
const signUpHandler = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await createUser(name, email, password);
    res.status(201).send(user);
  } catch (err) {
    const errors=handleError(err)
    res.status(404).json(errors)
  }
};

module.exports = {
  loginPage,
  loginHandler,
  signUpPage,
  signUpHandler,
};
