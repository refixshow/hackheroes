const mongoose = require('mongoose');

const bmiModel = new mongoose.Schema({
    user_id: String,
    date: Date,
    weight: Number,
    height: Number,
    bmi: Number,
});

const BMI = mongoose.model('Bmi', bmiModel);

module.exports = BMI;
