const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URL || 'mongodb://localhost/capstone'
const express = require("express");
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const app = express();
const cors = require('cors')
app.use(cors())
const path = require("path");
const jwt = require('jsonwebtoken')
const passport = require('passport')
app.use(express.json())
app.use(express.urlencoded({extended: false}))


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

// User Registration Endpoints
app.post('/user-reg', async (req, res) => {
  const {
    username,
    email,
    password,
    reEnterPassword
  } = req.body

  // Encrytpt Passwords
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

// Login Endpoints
app.post("/login", async (req, res) => {
  const {username, password} = req.body
  console.log(username)
  const user = await User.findOne({ username })
  if(!user) {
    return res.status(404).send("User not found")
  }
  if(await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '2h'
    })

    if(res.status(201)) {
      return res.json({status: "ok", data: token})
    }
    else {
      return res.json({ error: "error"})
    }
  }
  return res.status(404).send("Invalid Password")
})

// Student's User Info
app.post('/user-info', async (req, res) => {
  const {token} = req.body;
  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, res) => {
      if(err) {
        return "token has expired";
      }
      return res;
    })
    console.log(user);

    if(user === "token has expired") {
      return res.status(404).send({ data: "token has expired" })
    }

    const nameOfUser = user.username
    User.findOne({ username: nameOfUser})
    .then((data) => {
      res.status(200).send({ data: data })
    })
    .catch((error) => {
      res.status(404).send({ data: error })
    })
  }
  catch (error) {
    res.status(404).send({ data: error })
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
