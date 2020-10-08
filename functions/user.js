// Imports
const connectToDatabase = require('../lib/database');
const saveInDatabase = require('../lib/saveInDatabase');
// Model import
let User = require('../models/user');

exports.handler = async function (event, context, callback) {
    if (event.httpMethod === 'GET') {
        // GET method handler
        const db = await connectToDatabase();
        const users = (await User.find({})).toString();

        callback(null, {
            statusCode: 200,
            body: users,
        });
    } else if (event.httpMethod === 'POST') {
        // POST method handler
        const db = await connectToDatabase();

        const { username, email, password, firstName, lastName, gender, birthDate, location } = JSON.parse(event.body);

        const newUser = new User({
            username,
            email,
            password,
            firstName,
            lastName,
            gender,
            birthDate,
            location,
            meta: {
                sports: [],
                enrolledEvents: [],
            },
        });
        saveInDatabase(newUser);

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
