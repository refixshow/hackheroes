const mongoose = require('mongoose');

// DB connection
mongoose
    .connect('mongodb://localhost/hackheroes', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

// Models
let Event = require('../models/event');

exports.handler = function (event, context, callback) {
    switch (event.httpMethod) {
        case 'GET':
            // Get event
            Event.find({})
                .then((events) => {
                    callback(null, {
                        statusCode: 200,
                        body: 'GET',
                        events,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
            break;
        case 'POST':
            // Add event
            let { title, author, description } = JSON.parse(event.body);
            const event = new Event({
                title,
                author,
                description,
            });
            event
                .save()
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            callback(null, {
                statusCode: 200,
                body: 'POST',
            });
            break;
        case 'DELETE':
            // Delete event
            callback(null, {
                statusCode: 200,
                body: 'DELETE',
            });
            break;
        case 'PATCH':
            // Update event
            callback(null, {
                statusCode: 200,
                body: 'PATCH',
            });
            break;
    }
};
