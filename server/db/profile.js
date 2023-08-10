const mongoose = require('mongoose');
const express = require('express')
// need to change the DB_URL to our actual database url
const dbURL = process.env.DB_URL || 'mongodb://localhost/capstone'
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("connected to the database")
  })
  .catch((e) => console.log(e));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(`db connected: ${dbURL}`);
});

const userRegSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String, required: true, unique: true, lowercase: true},
  phone: {type: Number},
  address: {type: String},
  userName: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, default: false},
  UUID: {type: String, default: uuidv4()} 
});

const collectionName = 'users';
const user = mongoose.model('user', userRegSchema, collectionName);

app.post('/register', async (req, res) => {
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
  try {
    await user.create({
      firstNameInput, 
      lastNameInput, 
      emailInput, 
      phoneNumberInput,
      addressInput,
      userNameInput,
      passWordInput,
      passWordReEnterInput
    })
    res.send({status: 'ok'})
  } catch (error) {
    res.send({status: 'error'})
  }
})

// Need to use commands for mongo to access and post data into db
const newUser = (req, res) => {
  console.log(`db getUser`);
  pool.query('SELECT actor_id, first_name, last_name FROM actor ORDER BY last_name ASC', (error, results) => {
      if (error) {
          throw error;
      }
      res.status(200).json(results.rows);
  })
};

// Some help with mongo commands
// app.post('/newUser', async (req, res) => {
//   console.log(`POST /newUser: ${JSON.stringify(req.body)}`);
//   const newUser = new user();
//   newUser.name = req.body.name;
//   newUser.role = req.body.role;
//   try {
//       let aUser = await newUser.save();
//       console.log(`new user save: ${aUser}`);
//       res.send(`done ${aUser}`);
//   } catch (err) {
//       console.error(err);
//       res.send(`error: ${err}`);
//   }
// });