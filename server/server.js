const express = require("express");
const path = require("path");
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();
// For production not development
app.use("/", express.static(path.join(__dirname, "../client/")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});