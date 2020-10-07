const mongoose = require('mongoose');
const { Schema } = mongoose;

// Event Schema
const eventSchema = new Schema({
    title: String,
    author: String, // ID of author
    description: String,
    comments: [
        {
            body: String,
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    date: Date,
    meta: {
        interested: Number,
        enrolled: Number,
    },
});

let Event = (module.exports = mongoose.model('Event', eventSchema));
