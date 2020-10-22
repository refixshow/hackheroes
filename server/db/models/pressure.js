const mongoose = require('mongoose');

const pressureModel = new mongoose.Schema({
    user_id: String,
    date: Date,
    sys_pressure: Number, // Systolic pressure
    dias_pressure: Number, // Diastolic pressure
    status: String,
});

const Pressure = mongoose.model('Pressure', pressureModel);

module.exports = Pressure;
