var helpers = require("./helperFunction");
var Sequelize = require("sequelize");

// const bcrypt = require("bcrypt");
// const saltRounds = 10;
var db = require('../models')

module.exports = function(app) {
  // attempt to deal with the cors problem
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/", function(req, res) {
    res.status(200).send("Hello World");
  });

  // ==========GET ROUTES============

  // ==========POST ROUTES============
  app.post("/api/signup", (req, res) => {
    
      let email= req.body.userPayload.email
      let name = req.body.userPayload.Name
      let password= req.body.userPayload.password
      let confirm= req.body.userPayload.confirmation
   
    // console.log(newUser, "newUser")
    let errors = {};
    if (helpers.emptyString(email)) {
      errors.email = "Must not be empty";
    // } else if (helpers.emailFormat(email)) {
    //   errors.email = "Must be a valid email";
    }
    if (helpers.emptyString(name)) {
      errors.name = "Must include a name";
    }
    if (password !== confirm) {
      errors.password = "Passwords do not match";
    }
    if(Object.keys(errors).length>0){
      console.log(errors)
        return res.status(400).json(errors)
    }else{
      db.Users.create({
        name:name,
        email:email,
        password:password
      }).then(user=>{
        let redir = { redirect:'/calendar'}
        res.status(201).json(redir)
        
        console.log('user added')
      }).catch(error=>{
        res.send(error)
      })
    }

   
  });

  // ==========DELETE ROUTES============
};
