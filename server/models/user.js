const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    gender: Boolean,
    birthDate: Date,
    location: String,
    accountCreationDate: {
        type: Date,
        default: Date.now,
    },
    configured: {
        // TRUE: if user has completed first configuration
        type: Boolean,
        default: false,
    },
    meta: {
        sports: [
            {
                sportId: String,
            },
        ],
        enrolledEvents: [
            {
                eventId: String,
                eventName: String,
            },
        ],
    },
});

let User = (module.exports = mongoose.model('User', userSchema));
