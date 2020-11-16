const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = {
  firstName: String,
  lastName: String,
  emailID: String,
  password: String
};

const user = mongoose.model("user", userSchema);

/////////////////////////get requests/////////////////////////

app.get("/signup", function(req, res){
  res.render("signup");
});

app.get("/signin", function(req, res){
  res.render("signin");
});

app.get("/form", function(req, res){
  res.render("form");
});



/////////////////////////Post requests/////////////////////////
app.post("/signup", function(req, res){
  const newUser = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailID: req.body.emailID,
    password: req.body.password
  });

  newUser.save();
});






app.listen(3000, function(){
  console.log("server started on port 3000");
});
