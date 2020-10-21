const getConnection = require('../db/index');
let Activity = require('../db/models/activity');

exports.handler = async (event, context, callback) => {
    const { clientContext: user } = context;

    if (true) {
        if (event.httpMethod === 'GET') {
            const db = await getConnection();

            const activities = (await Activity.find({})).toString();

            callback(null, {
                statusCode: 200,
                body: activities,
            });
        } else if (event.httpMethod === 'POST') {
            const db = await getConnection();
            const { user_id, type, length, calories, date } = JSON.parse(event.body);

            const newActivity = new Activity({
                user_id,
                type,
                length,
                calories,
                date,
            });

            newActivity.save();

            callback(null, {
                statusCode: 201,
                body: 'Activity saved',
            });
        } else if (event.httpMethod === 'PATCH') {
            const db = await getConnection();
            const { activity_id, type, length, calories, date } = JSON.parse(event.body);

            Activity.updateOne({ id: activity_id }, { type, length, calories, date });

            callback(null, {
                statusCode: 200,
                body: 'OK',
            });
        } else if (event.httpMethod === 'DELETE') {
            const db = await getConnection();

            const { activity_id } = JSON.parse(event.body);

            Activity.deleteOne({ id: activity_id });

            callback(null, {
                statusCode: 200,
                body: 'OK',
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
