const getConnection = require('../db/index');
let BMI = require('../db/models/bmi');

exports.handler = async (event, context, callback) => {
    const { clientContext: user } = context;

    if (true) {
        if (event.httpMethod === 'GET') {
            const db = await getConnection();

            const bmi = JSON.stringify(await BMI.find({}));

            callback(null, {
                statusCode: 200,
                body: 'OK',
            });
        } else if (event.httpMethod === 'POST') {
            const db = await getConnection();
            const { user_id, date, weight, height, bmi } = event.headers;

            console.log(user_id + date + weight + height + bmi);
            const bmiTest = new BMI({
                user_id,
                date,
                weight,
                height,
                bmi,
            });

            bmiTest.save().catch((err) => console.log(err));

            callback(null, {
                statusCode: 200,
                body: 'BMI test saved',
            });
        } else if (event.httpMethod === 'DELETE') {
            const db = await getConnection();

            const { bmi_test_id } = event.headers;

            BMI.deleteOne({ id: bmi_test_id });

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
