const mongoose = require('mongoose');

const pressureTest = new mongoose.Schema({
    user_id: String,
    date: Date,
    sys_pressure: Number, // Systolic pressure
    dias_pressure: Number, // Diastolic pressure
    status: String,
});

const Pressure = mongoose.model('Pressure', pressureTest);

module.exports = Pressure;
