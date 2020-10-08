const mongoose = require('mongoose');
const { Schema } = mongoose;

// Event Schema
const eventSchema = new Schema({
    title: String,
    author: String,
    description: String,
    date: Date,
    location: String,
    comments: [
        {
            body: String,
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    meta: {
        interested: Number,
        enrolled: Number,
    },
});

let Event = (module.exports = mongoose.model('Event', eventSchema));
