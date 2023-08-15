const {Schema, model } = require('mongoose');

const courseSchema = new Schema ({
  "Course ID": String,
  "Course Title": String,
  "Course Description": String,
  "Classroom Number": String,
  "Capacity": String,
  "Credit Hours": String,
  "Tuition Cost": String
},
{
  collection: "courses"
}
)

const Course = model("courses", courseSchema)

module.exports = { Course }