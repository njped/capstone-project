const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/api/user', userRoutes);
// router.use('/api/courses', courseRoutes)
module.exports = router;