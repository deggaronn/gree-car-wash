const mongoose = require("mongoose");
const brcypt = require("bcrypt");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  username: {
    type: String,
  },
});

const User = mongoose.model("googleauthusers", userSchema);
module.exports = User;
