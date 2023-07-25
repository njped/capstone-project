const express = require("express");
const path = require("path");
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();
// For production not development
app.use(express.static("../client/src"));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});