const {Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config

const userRegSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  username: {
    type: String, 
    required: true, 
    unique: true
  },
  password: {
    type: String, 
    required: true
  },
  isAdmin: {
    type: Boolean, 
    default: false
  },
  regCourses: {
    type: Array
  }
  },
  {
    collection: "users"
  }
);

// Encrypt password before User creation
userRegSchema.pre('save', async function (next) {
  console.log(this.password);
  // const salt = bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, 12);
  next()
})

userRegSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userRegSchema.methods.isAdminister = function() {
  return this.isAdmin ? true : false;
}

const User = model('users', userRegSchema);

module.exports = User