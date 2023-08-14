const router = require("express").Router()
const { getCourseById, getManyCourseById, getAllCourses} = require('../controllers/CourseController')

router.get('/:id', getCourseById);
router.get('/:id', getManyCourseById);
router.get('/', getAllCourses);

module.exports = router