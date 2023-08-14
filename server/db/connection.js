const mongoose = require('mongoose');
require('dotenv').config();

const dbURL = process.env.DB_URL || 'mongodb://localhost/capstone'

mongoose
  .connect(dbURL, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('MongoDB connected successfully')
    // console.log(`DB URL: ${dbURL}`)
  })
  .catch((err) => console.error(err));

module.exports = mongoose.connection