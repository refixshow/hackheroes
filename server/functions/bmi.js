const getConnection = require('../db/index');
const BMI = require('../db/models/Bmi');

exports.handler = async (event, context, callback) => {
    const { clientContext: user } = context;
    const db = await getConnection();

    if (true) {
        if (event.httpMethod === 'GET') {
            const { bmi_id } = JSON.parse(event.body);
            await BMI.find({ _id: bmi_id })
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
            const { user_id, date, weight, height, bmi } = JSON.parse(event.body);

            const bmiTest = new BMI({
                user_id,
                date,
                weight,
                height,
                bmi,
            });

            await bmiTest
                .save()
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
            const { bmi_id } = JSON.parse(event.body);

            await BMI.deleteOne({ _id: bmi_id })
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
