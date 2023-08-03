const express = require("express");
const path = require("path");
const passport = require('passport')

// const jwt = require('jwt')

require('dotenv').config()
const dbCourses = require('./db/courses.js');
const dbProfile = require('./db/profile.js')
// const authMiddleware  = require('./authServer.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// For production not development

app.use(express.static(path.resolve(__dirname, "../client/dist")));

// app.get('/getUser', dbProfile.getProfile);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});