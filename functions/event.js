// Imports
const connectToDatabase = require('../lib/database');
const saveInDatabase = require('../lib/saveInDatabase');
// Model import
let Event = require('../models/event');

exports.handler = async function (event, context, callback) {
    if (event.httpMethod === 'GET') {
        const db = await connectToDatabase();
        const events = (await Event.find({})).toString();

        callback(null, {
            statusCode: 200,
            body: events,
        });
    } else if (event.httpMethod === 'POST') {
        const db = await connectToDatabase();

        const { title, author, description, date, location } = JSON.parse(event.body);

        const newEvent = new Event({
            title,
            author,
            description,
            date,
            location,
            comments: [],
            meta: {
                interested: 0,
                enrolled: 0,
            },
        });
        saveInDatabase(newEvent);

        callback(null, {
            statusCode: 200,
            body: 'POST',
        });
    } else if ((event.httpMethod = 'DELETE')) {
        // TO DO: handling DELETE method
    } else if ((event.httpMethod = 'PATCH')) {
        // TO DO: handling PATCH method
    }
};
