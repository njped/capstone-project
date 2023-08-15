const { Course } = require('../models/courses')

const getCourseById = async (req, res, next) => {
  
}

const getManyCourseById = async (req, res, next) => {

}

const getAllCourses = async (req, res) => {
  const courses = await Course.find()
  console.log(courses);
  res.json({courses})
}

module.exports = {
  getCourseById,
  getManyCourseById,
  getAllCourses
}