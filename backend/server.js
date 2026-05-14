const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const trackerRoutes = require("./routes/trackerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api", trackerRoutes);

app.get("/", (req, res) => {
  res.send("Tracker API Running");
});

app.listen(5000, "0.0.0.0",() => {
  console.log("Server running on port 5000");
});