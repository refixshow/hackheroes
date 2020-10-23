const mongoose = require("mongoose");

const pressureSchema = new mongoose.Schema({
  user_id: String,
  date: Date,
  sys_pressure: Number, // Systolic pressure
  dias_pressure: Number, // Diastolic pressure
  status: String,
});

const PressureModel = mongoose.model("Pressure", pressureSchema);

module.exports = PressureModel;
