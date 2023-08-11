const mongoose = require('mongoose');

// need to change the DB_URL to our actual database url
const dbURL = process.env.DB_URL || 'mongodb://localhost/capstone'
mongoose
  .connect(dbURL, {
    useNewUrlParser:true
  })
  .then(() => {
    console.log("Connected to the database")
  })
  .catch((e) => {
    console.log("Connection with database failed")
    console.log(e)
  });