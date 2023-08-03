const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cronch:mimfgitw@courses.1htfmfx.mongodb.net/?retryWrites=true&w=majority";
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

app.get("/api/courses", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function getCourses(){
  await client.db("courses").collection("courses")
}
