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
    username,
    email,
    password,
    reEnterPassword
  } = req.body

  const encryptedPassword = await bcrypt.hash(password, 10)
  const encryptedRePassword = await bcrypt.hash(reEnterPassword, 10)
  
  try {
    const existingUser = await User.findOne({ $or: [{email}, {username}] })

    if(existingUser) {
      if(existingUser.email === email) {
        return res.status(400).send({status: "Email already in use"})
      }
      if(existingUser.username === username) {
        return res.status(400).send({status: "Username already in use"})
      }
    }

    await User.create({
      ...req.body,
      password: encryptedPassword,
      reEnterPassword: encryptedRePassword
    })

    res.send("It Worked")
  } catch (error) {
    res.status(500).send(error)
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
