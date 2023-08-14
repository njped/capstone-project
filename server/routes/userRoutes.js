const router = require('express').Router();
const { registerUser, getUsers, getUserById, login } = require('../controllers/UserController');

// router
//   .route('/')
//   .get(getUsers)
//   .post(registerUser);

// router
//   .route('/:id')
//   .get(getUserById)
//   .delete(deleteUserById)
//   .update(updateUserById)

router.post('/', registerUser);   // POST to `/api/user/`
router.get('/', getUsers);        // POST to `/api/user/`
router.get('/:id', getUserById);  // GET to `/api/user/:id`
router.post('/login', login)      // POST to `/api/user/login

module.exports = router;