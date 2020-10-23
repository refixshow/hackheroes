const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
  email: String,
  name: String,
  creation_date: {
    type: Date,
    default: Date.now,
  },
  birth_date: Date,
  meta: {
    bmi_his: [
      {
        bmi_test_id: String,
      },
    ],
    pressure_his: [
      {
        pressure_test_id: String,
      },
    ],
    activities_his: [
      {
        activity_id: String,
      },
    ],
  },
})

const User = mongoose.model("User", userModel)

module.exports = User
