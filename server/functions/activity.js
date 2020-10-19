const getConnection = require('../db/index');
let Activity = require('../db/models/bmi');

exports.handler = async (event, context, callback) => {
    const { clientContext: user } = context;

    if (true) {
        if (event.httpMethod === 'GET') {
            const db = await getConnection();

            const activity = JSON.stringify(await Activity.find({}));

            callback(null, {
                statusCode: 200,
                body: 'OK',
            });
        } else if (event.httpMethod === 'POST') {
            const db = await getConnection();
            const { user_id, type, length, calories, date } = event.headers;

            const newActivity = new Activity({
                user_id,
                type,
                length,
                calories,
                date,
            });

            newActivity.save().catch((err) => console.log(err));

            callback(null, {
                statusCode: 200,
                body: 'Activity saved',
            });
        } else if (event.httpMethod === 'PATCH') {
            const db = await getConnection();
            const { activity_id, type, length, calories, date } = event.headers;

            Activity.updateOne({ id: activity_id }, { type, length, calories, date });

            callback(null, {
                statusCode: 200,
                body: 'OK',
            });
        } else if (event.httpMethod === 'DELETE') {
            const db = await getConnection();

            const { activity_id } = event.headers;

            Activity.deleteOne({ id: activity_id });

            callback(null, {
                statusCode: 200,
                body: 'OK',
            });
        } else {
            callback(null, {
                statusCode: 422,
                body: 'Bad request',
            });
        }
    } else {
        callback(null, {
            statusCode: 422,
            body: 'Unauthorized request',
        });
    }
};
