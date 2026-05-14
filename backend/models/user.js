const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  meals: Array,
  water: Number
});

module.exports = mongoose.model("User", userSchema);