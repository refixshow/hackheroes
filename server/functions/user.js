const getConnection = require('../db/index');
let User = require('../db/models/bmi');

exports.handler = async (event, context, callback) => {
    const { clientContext: user } = context;

    if (true) {
        if (event.httpMethod === 'GET') {
            const db = await getConnection();

            const users = JSON.stringify(await User.find({}));

            callback(null, {
                statusCode: 200,
                body: 'OK',
            });
        } else if (event.httpMethod === 'POST') {
            const db = await getConnection();
            const { email, name, birth_date } = event.headers;

            const newUser = new User({
                email,
                name,
                birth_date,
                meta: {
                    bmi_his: [],
                    pressure_his: [],
                    activities_his: [],
                },
            });

            newUser.save().catch((err) => console.log(err));

            callback(null, {
                statusCode: 200,
                body: 'Pressure test saved',
            });
        } else if (event.httpMethod === 'PATCH') {
            const db = await getConnection();
            const { user_id, email, name, birth_date } = event.headers;

            User.updateOne({ id: user_id }, { email, name, birth_date });

            callback(null, {
                statusCode: 200,
                body: 'OK',
            });
        } else if (event.httpMethod === 'DELETE') {
            const db = await getConnection();

            const { user_id } = event.headers;

            User.deleteOne({ id: user_id });

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
