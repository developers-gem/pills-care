const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  dob: {
    type: String,
    // type: Date,
  },

  gender: {
    type: String,
    enum: ["Male", "Female", "Other"], 
  },
  role: { type: String, enum: ["user", "admin"], default: "user" },

});

module.exports = mongoose.model("User", userSchema);