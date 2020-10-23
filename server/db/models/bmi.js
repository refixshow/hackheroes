const mongoose = require("mongoose");

const bmiSchema = new mongoose.Schema({
  user_id: String,
  date: Date,
  weight: Number,
  height: Number,
  bmi: Number,
});

const BMIModel = mongoose.model("Bmi", bmiSchema);

module.exports = BMIModel;
