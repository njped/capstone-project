const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URL || 'mongodb://localhost/capstone'
const mongoose = require('mongoose')
const express = require("express");
const cors = require('cors')
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require('./db/connection.js')
const routes = require('./routes')
require('dotenv').config()
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const passport = require('passport')
// const session = require('express-session')

const app = express();
const PORT = process.env.PORT || 3001;
// require('./models/courses.js');
// require('./models/profile.js')

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
})

app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(routes)
app.use(cookieParser())

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
//   })
//   )
//   app.use(passport.initialize())
//   app.use(passport.session())
  
//   // app.use(require('./routes'));
  
  
//   // For production not development
//   app.use(express.static(path.resolve(__dirname, "../client/dist")));
//   const User = mongoose.model('users')
  
//   initializePassport(passport, username => {
//     return User.findOne(user => user.username === username)
//   })
//   // User Registration Endpoints
// app.post('/user-reg', async (req, res) => {
//   const {
//     username,
//     email,
//     password,
//     reEnterPassword
//   } = req.body

//   req.session.username = req.body.username;
//   req.session.email = req.body.email;
//   req.session.password = req.body.password;
  
//   if (password !== reEnterPassword) {
//     return res.status(400).send({status: 'Passwords do not match'});
//   }

//   // Checks to see if there is a copy of either email or username before saving into database
//   try {
//     const existingUser = await User.findOne({ $or: [{email}, {username}] })

//     if(existingUser) {
//       if(existingUser.email === email) {
//         return res.status(400).send({status: "Email already in use"})
//       }
//       if(existingUser.username === username) {
//         return res.status(400).send({status: "Username already in use"})
//       }
//     }

//     await User.create(req.body)
//     res.status(200).send({status: 'ok'})
//   } catch (error) {
//     res.status(500).send(error)
//   }
//   res.end()
// })

// // Login Endpoints
// app.post("/login", async (req, res) => {
//   const {username, password} = req.body
  
//   // Tries to find the user
//   const user = await User.findOne({ username })
//   if(!user) {
//     return res.status(404).send("User not found")
//   }

//   // Creates token and expires in 2 hours
//   if(await bcrypt.compare(password, user.password)) {
//     const token = jwt.sign({username: user._id}, process.env.ACCESS_TOKEN_SECRET, {
//       expiresIn: '2h'
//     })

//     res.cookie("token", user, {
//       withCredentials: true,
//       httpOnly: false,
//     });

//     if(res.status(201)) {
//       return res.json({status: "ok", data: token})
//     }
//     else {
//       return res.json({ error: "error"})
//     }
//   }
//   return res.status(404).send("Invalid Password")
// })

// // Student's User Info
// app.post('/user-info', async (req, res) => {
//   // Checks to see if token is still valid
//   const {token} = req.cookies.token || req.body;
//   try {
//     const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, res) => {
//       if(err) {
//         return "token has expired";
//       }
//       return res;
//     })
//     console.log(user);

//     if(user === "token has expired") {
//       return res.status(404).send({ data: "token has expired" })
//     }

//     const nameOfUser = user.username
//     User.findOne({ username: nameOfUser})
//     .then((data) => {
//       res.status(200).send({ data: data })
//     })
//     .catch((error) => {
//       res.status(404).send({ data: error })
//     })
//   }
//   catch (error) {
//     res.status(404).send({ data: error })
//   }
// })

// // Get All Users
// app.get('/getUsers', async (req, res) => {
//   try {
//     const allUsers = await User.find({})
//     res.status(200).send({data: allUsers})
//   } catch (error) {
//     console.log(error.message)
//   }
// })

app.get("/api", async (req, res) => {
  res.json({ message: "Hello from server!" });
});

// app.get("/api/courses", async (req, res) => {
//   res.json(getCourses());
// });

// app.get("/api/users/*")

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
})

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function init() {
//   await client.connect()
// };


// async function getCourses(){
//   let cursor = client.db("courses").collection("courses").find()
//   let array = await cursor.toArray()
//   // console.log(JSON.stringify(array));
//   return array;
// }

// init()