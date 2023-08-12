const mongoose = require('mongoose');
require('./connection.js')

const userRegSchema = new mongoose.Schema(
  {
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String, required: true, unique: true, lowercase: true},
  phone: {type: String},
  address: {type: String},
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  reEnterPassword: {type: String, required: true},
  isAdmin: {type: Boolean, default: false},
  regCourses: {type: Array}
  },
  {
    collection: "users"
  }
);

mongoose.model('users', userRegSchema);