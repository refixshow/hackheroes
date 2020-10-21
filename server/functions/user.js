const getConnection = require('../db/index');
let User = require('../db/models/user');

exports.handler = async (event, context, callback) => {
    const { clientContext: user } = context;

    if (true) {
        if (event.httpMethod === 'GET') {
            const db = await getConnection();

            const users = (await User.find({})).toString();

            callback(null, {
                statusCode: 200,
                body: users,
            });
        } else if (event.httpMethod === 'POST') {
            const db = await getConnection();
            const { email, name, birth_date } = JSON.parse(event.body);

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

            newUser.save();

            callback(null, {
                statusCode: 201,
                body: 'User saved',
            });
        } else if (event.httpMethod === 'PATCH') {
            const db = await getConnection();
            const { user_id, email, name, birth_date } = JSON.parse(event.body);

            User.updateOne({ id: user_id }, { email, name, birth_date });

            callback(null, {
                statusCode: 200,
                body: 'OK',
            });
        } else if (event.httpMethod === 'DELETE') {
            const db = await getConnection();

            const { user_id } = JSON.parse(event.body);

            User.deleteOne({ id: user_id });

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
