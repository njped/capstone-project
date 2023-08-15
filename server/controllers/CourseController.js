const { Course } = require('../models/courses')

const getCourseById = async (req, res, next) => {
  
}

const getManyCourseById = async (req, res, next) => {
  
}

const getAllCourses = async (req, res, next) => {
  const courses = await Course.find()
  res.status(200).send({status: 'allCourses', courses})
  next()
}

module.exports = {
  getCourseById,
  getManyCourseById,
  getAllCourses
}