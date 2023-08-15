const router = require("express").Router()
const { getCourseById, getManyCourseById, getAllCourses} = require('../controllers/CourseController')

router.get('/:id', getCourseById); // GET (api/courses/:id)
router.get('/:id', getManyCourseById);  // GET (api/courses/:id)
router.get('/', getAllCourses); // GET (api/courses)

module.exports = router