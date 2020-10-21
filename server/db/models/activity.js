const mongoose = require('mongoose');

const activity = new mongoose.Schema({
    user_id: String,
    type: String,
    length: Number,
    calories: Number,
    date: Date,
});

const Activity = mongoose.model('Activity', activity);

module.exports = Activity;
