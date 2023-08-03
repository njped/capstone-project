const mongoose = require('mongoose');
const dbURL = process.env.DB_URL || 'mongodb://localhost/mtech2023'
mongoose.connect(dbURL); // "userManagement" is the db name
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(`db connected: ${dbURL}`);
});

const userRegSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  address: {type: String, required: true},
  userName: {type: String, required: true},
  password: {type: String, required: true},
  reEnteredPassword: {type: String, required: true},
});

const collectionName = 'user';
const user = mongoose.model('userCollection', userRegSchema, collectionName);

// Need to use commands for mongo to access and post data into db
const getUser = (req, res) => {
  console.log(`db getUser`);
  pool.query('SELECT actor_id, first_name, last_name FROM actor ORDER BY last_name ASC', (error, results) => {
      if (error) {
          throw error;
      }
      res.status(200).json(results.rows);
  })
};