const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  user_id: String,
  type: String,
  length: Number,
  calories: Number,
  date: Date,
});

const ActivityModel = mongoose.model("Activity", activitySchema);

module.exports = ActivityModel;
