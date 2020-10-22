const getConnection = require('../db/index');
const Activity = require('../db/models/Activity');

exports.handler = async (event, context, callback) => {
    const { clientContext: user } = context;
    const db = await getConnection();

    if (true) {
        if (event.httpMethod === 'GET') {
            const { activity_id } = JSON.parse(event.body);
            await Activity.find({ _id: activity_id })
                .then((res) => {
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify({ response: res, message: 'OK' }),
                    });
                })
                .catch((err) => {
                    callback(null, {
                        statusCode: 404,
                        body: JSON.stringify({ response: err, message: 'Not found' }),
                    });
                });
        } else if (event.httpMethod === 'POST') {
            const { user_id, type, length, calories, date } = JSON.parse(event.body);

            const newActivity = new Activity({
                user_id,
                type,
                length,
                calories,
                date,
            });

            await newActivity
                .save()
                .then((res) => {
                    callback(null, {
                        statusCode: 201,
                        body: JSON.stringify({ response: res, message: 'OK' }),
                    });
                })
                .catch((err) => {
                    callback(null, {
                        statusCode: 404,
                        body: JSON.stringify({ response: err, message: 'Not found' }),
                    });
                });
        } else if (event.httpMethod === 'PATCH') {
            const { activity_id, type, length, calories, date } = JSON.parse(event.body);

            await Activity.updateOne({ _id: activity_id }, { type, length, calories, date })
                .then((res) => {
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify({ response: res, message: 'OK' }),
                    });
                })
                .catch((err) => {
                    callback(null, {
                        statusCode: 404,
                        body: JSON.stringify({ response: err, message: 'Not found' }),
                    });
                });
        } else if (event.httpMethod === 'DELETE') {
            const { activity_id } = JSON.parse(event.body);

            await Activity.deleteOne({ _id: activity_id })
                .then((res) => {
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify({ response: res, message: 'OK' }),
                    });
                })
                .catch((err) => {
                    callback(null, {
                        statusCode: 404,
                        body: JSON.stringify({ response: err, message: 'Not found' }),
                    });
                });
        } else {
            callback(null, {
                statusCode: 400,
                body: 'Bad request',
            });
        }
    } else {
        callback(null, {
            statusCode: 401,
            body: 'Unauthorized request',
        });
    }
};
