var helpers = require("./helperFunction");
var Sequelize = require("sequelize");

// const bcrypt = require("bcrypt");
// const saltRounds = 10;
var db = require("../models");

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
app.get('/api/month', (req,res)=>{
  let monthErrors = {}
  let month = req.body.monthPayload.month
  let user = req.body.monthPayload.user
  if(helpers.emptyString(month)){
    monthErrors.month = "invalid month"
  }
  if(Object.keys(monthErrors).length>0){
    res.status(400).json(monthErrors)
  }else{
    db.Events.findAll({
      where: {
        user_id : user,
        month : month
      }
    }).then(month=>{
      console.log(month)
    })
  }
})
  // ============================POST ROUTES==============================

  // ====Route for signing up a new user===
  app.post("/api/signup", (req, res) => {
    let email = req.body.userPayload.email;
    let name = req.body.userPayload.Name;
    let password = req.body.userPayload.password;
    let confirm = req.body.userPayload.confirmation;

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
    if (Object.keys(errors).length > 0) {
      console.log(errors);
      return res.status(400).json(errors);
    } else {
      db.Users.create({
        name: name,
        email: email,
        password: password
      })
        .then(user => {
          let redir = { redirect: "/calendar" };
          res.status(201).json(redir);
          console.log("user added");
        })
        .catch(error => {
          res.send(error);
        });
    }
  });

  // ==== Route to login =====
  app.post("/api/login", (req, res) => {
    let loginEmail = req.body.loginUserPayload.email;
    let loginPassword = req.body.loginUserPayload.password;

    let errors = {};
    if (helpers.emptyString(loginEmail)) {
      errors.email = "must include a valid email";
    }
    if (helpers.emptyString(loginPassword)) {
      errors.Password = "must include a valid Password";
    }
    if (Object.keys(errors).length > 0) {
      res.status(400).json(errors);
    } else {
      db.Users.findAll({
        where: {
          email: loginEmail,
          password: loginPassword
        }
      })
        .then(user => {
          let resData = {}
          resData.response = user[0].dataValues;
          resData.redir = { redirect: "/calendar" };
          if (user.length === 0) {
            res.status(400).json("email or password is incorrect");
          } else {
            // create and send back a token for the user?
            // redirect to the calendar page for specific user
            res.status(201).json(resData);
          }
        })
        .catch(errors => {
          console.log(errors);
        });
    }
  });
  // ==========DELETE ROUTES============
};
