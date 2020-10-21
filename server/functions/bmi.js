const getConnection = require('../db/index');
let BMI = require('../db/models/bmi');

exports.handler = async (event, context, callback) => {
    const { clientContext: user } = context;

    if (true) {
        if (event.httpMethod === 'GET') {
            const db = await getConnection();

            const bmi = (await BMI.find({})).toString();

            callback(null, {
                statusCode: 200,
                body: bmi,
            });
        } else if (event.httpMethod === 'POST') {
            const db = await getConnection();
            const { user_id, date, weight, height, bmi } = JSON.parse(event.body);

            const bmiTest = new BMI({
                user_id,
                date,
                weight,
                height,
                bmi,
            });

            bmiTest.save();

            callback(null, {
                statusCode: 201,
                body: 'BMI test saved',
            });
        } else if (event.httpMethod === 'DELETE') {
            const db = await getConnection();

            const { bmi_test_id } = JSON.parse(event.body);

            BMI.deleteOne({ id: bmi_test_id });

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
