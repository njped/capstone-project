require('dotenv').config()
const jwt = require('jsonwebtoken');
const secret = process.env.ACCESS_SECRET_TOKEN;

const authMiddleware = (req => {
  // allows token to be sent via req.body
  let token = req.body.token
  if (req.headers.authorization) {
    token = token.split(' ');
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret);
    req.user = data;
  } catch {
    console.log('Invalid token');
  }

  return req;
})

const signToken = (() => {
  
})

module.exports = { authMiddleware };
  
  // signToken: function ({ email, username, _id }) {
  //   const payload = { email, username, _id };

  //   return jwt.sign({ data: payload }, secret);
  // }