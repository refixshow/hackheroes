const mongoose = require('mongoose');

const bmiTestSchema = new mongoose.Schema({
    user_id: String,
    date: Date,
    weight: Number,
    height: Number,
    bmi: Number,
});

const BMI = mongoose.model('Bmi', bmiTestSchema);

module.exports = BMI;
