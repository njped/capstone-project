const router = require('express').Router();
const { registerUser, getUsers, getUserById, login } = require('../controllers/UserController');
const { authMiddleware } = require('../utils/auth')

// router
//   .route('/')
//   .get(getUsers)
//   .post(registerUser);

// router
//   .route('/:id')
//   .get(getUserById)
//   .delete(deleteUserById)
//   .update(updateUserById)

router.post('/signup', registerUser);   // POST to `/api/user/signup`
router.get('/users', getUsers);        // GET to `/api/user/`
router.post('/', authMiddleware)
router.get('/:id', getUserById);  // GET to `/api/user/:id`
router.post('/login', login)      // POST to `/api/user/login

module.exports = router;