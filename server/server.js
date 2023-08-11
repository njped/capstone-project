const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URL || 'mongodb://localhost/capstone'
const express = require("express");
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const app = express();
const cors = require('cors')
app.use(cors())
const path = require("path");
const passport = require('passport')
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// const jwt = require('jwt')

require('dotenv').config()
require('./db/courses.js');
require('./db/connection.js')
require('./db/profile.js')
// const authMiddleware  = require('./authServer.js');

const PORT = process.env.PORT || 3001;


// For production not development

app.use(express.static(path.resolve(__dirname, "../client/dist")));
const User = mongoose.model('users')
// app.get('/getUser', dbProfile.getProfile);
app.post('/user-reg', async (req, res) => {
  const {
    firstNameInput, 
    lastNameInput, 
    emailInput, 
    phoneNumberInput,
    addressInput,
    userNameInput,
    passWordInput,
    passWordReEnterInput
  } = req.body

  const encryptedPassword = await bcrypt.hash(passWordInput, 10)
  const encryptedRePassword = await bcrypt.hash(passWordReEnterInput, 10)
  
  try {
    // const oldUser = await User.findOne({ emailInput })

    // if(oldUser) {
    //   return res.send({status: "User Exists"})
    // }
    // else {
    //   return res.send({status: "User Does Not Exist"})
    // }
    await profile.user.create({
      firstName,
      lastName,
      email,
      phone,
      address,
      username,
      password: encryptedPassword,
      reEnterPassWord: encryptedRePassword,
      isAdmin
    })
    res.send({status: 'ok'})
  } catch (error) {
    res.send({status: 'something went wrong'})
  }
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/courses", (req, res) => {
  res.json(getCourses());
});

// app.get("/api/users/*")

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function getCourses(){
  let cursor = client.db("courses").collection("courses").find()
  let array = await cursor.toArray()
  return JSON.stringify(array)
}
