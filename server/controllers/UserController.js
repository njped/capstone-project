const { User } = require('../models');
const { registerToken } = require('../utils/auth')

const registerUser = async (req, res, next) => {
  const { email, username, password, firstName, lastName, address, phone } = req.body

  try {
    // check for existing user
    const existingUser = await User.find({ $or:[
      {email},
      {username}
    ]})
  
    if (existingUser.length) {
      let errorReason = {email: '', username: ''};
      existingUser.forEach(user => {
        if (user.email === email) {
          errorReason.email = 'Email in use.';
        }
        if (user.username === username) {
          errorReason.username = 'Username in use.';
        }
      })
      let message = errorReason.email + ' ' + errorReason.username;

      console.error('User already exists', existingUser);
      return res.json({ message: message.trim()})
    }
  
    // register new user
    const user = await User.create({email, username, password, firstName, lastName, address, phone})
    console.log('user:', user)

    // register JWT
    const token = registerToken(user._id);

    // Save the token to the response cookie named 'token'
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false
    })

    res.status(201).send({
      status: 'success',
      message: 'User successfully created',
      user
    })
    next();
  } catch (error) {
    res.json({ message: error})
  }
};

const getUsers = async (req, res, next) => {
  const users = await User.find().select({password: 0})
  res.status(200).send({status: 'allUsers', users})
  next();
}

// Find the user by the user._id
const getUserById = async (req, res, next) => {
  const { params } = req;

  if (!params.id) {
    return res.json({ message: 'User ID required' });
  }

  console.log(params.id)

  try {
    // const user = await User.findById(params.id).select({
    const user = await User.findOne({ _id: params.id }).select({
      password: 0,
      __v: 0,
    });

    if (!user) {
      return res.json({ message: 'No user found' });
    }

    res.status(201).send({
      status: 'success',
      message: 'User found',
      user,
    });
    next();
  } catch (error) {
    console.error(error);
    res.json({ message: error });
  }
}

const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ message: 'Username and password required'})
  }

  try {
    const user = await User
      .findOne({ username })
      .select({
        __v: 0
      });

    if (!user) {
      return res.json({ message: 'Invalid credentials' })
    }
    const passwordCheck = await user.verifyPassword(password);

    console.log('verifyPassword', passwordCheck);
    if (!passwordCheck) {
      return res.json({ message: 'Invalid credentials' });
    }

    const token = registerToken(user._id);

    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
    });
  
    res.status(201).send({
      status: 'success',
      message: 'User logged in',
      user,
    });
    next();
  } catch (error) {
    console.error(error);
    res.json({ message: error });
  }
} 

module.exports = {
  registerUser,
  getUsers,
  getUserById,
  login
};
