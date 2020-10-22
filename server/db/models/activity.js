const mongoose = require('mongoose');

const activityModel = new mongoose.Schema({
    user_id: String,
    type: String,
    length: Number,
    calories: Number,
    date: Date,
});

const Activity = mongoose.model('Activity', activityModel);

module.exports = Activity;
