const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  creation_date: {
    type: Date,
    default: Date.now,
  },
  birth_date: Date,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
