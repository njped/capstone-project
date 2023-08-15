const jwt = require('jsonwebtoken');
const { User } = require('../models')
require('dotenv').config();


const registerToken = (userId, username, email) => {
  return jwt.sign({ userId, username, email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

const authMiddleware = async (req, res) => {
  // allows token to be sent via req.cookie req.body, req.query, or headers
  let token = req.body.token


  if (!token) {
    res.json({ message: 'Unauthorized user' });
  }

  try {
    const { userId } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    console.log(`userId: ${userId}`);
    const user = await User.findById(userId).select({ password: 0 });
    console.log(`user: ${user}`)

    if (user) {
      return res.status(201).send({ status: 'tokenAuthenticated', user });
    } else {
      return res.status(400).send({ status: 'malformedToken', message: 'Unable to authenticate the token' });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ status: 'error', message: error });
  }
}

module.exports = {
  registerToken,
  authMiddleware,
};