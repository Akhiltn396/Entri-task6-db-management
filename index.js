const express = require("express")
const bodyParser = require("body-parser")
var path = require('path');
const User = require("./models/User");
const mongoose = require("mongoose")
// const dBconnect = require('./config/dbConnect');
const config = require("./config/config");
const dotenv = require("dotenv").config()




const dbUrl = config.dbUrl;

  mongoose
    .connect(dbUrl)
    .catch (error => console.log(error));


// dBconnect.Dbconnect()

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

app.get("/signup",(req,res)=>{
    res.sendFile(__dirname + "/public/views/index.html");

  })

  app.post("/signup", async (req, res) => {

    const {username,email,password} = req.body

    try {
        const user = await User.create({
            username,
            email,
            password
          });

          res.redirect("/")

    } catch (error) {
        console.log(error);

    }

  })
app.get("/",async(req,res)=>{
    res.sendFile(__dirname + "/public/views/news/index.html");
})
app.get("/users",async(req,res)=>{
   const result = await User.find()

   res.send(result)
})
app.listen(3100,()=>{
    console.log("Server ready at port 3100");
})