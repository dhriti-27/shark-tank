const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PitchRouter = require("./routes/pitches");

// initializing the application
const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/pitches", PitchRouter);

app.get("/", (request, response) => {
  response.status(200).send("xharktank server is running....");
});

//custom 404 page/
app.use(function (req, res) {
  res.type("application/json");
  res.status(404);
  res.send({ success: false, message: "404 Route Not Found", data: null });
});

app.listen(8081, async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/xharktank");
    console.log("Connected To MongoDb ");
  } catch (error) {
    console.log("error connecting to db");
  }
  console.log("Server running on port 8081");
});
