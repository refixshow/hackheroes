const getConnection = require('../db/index');
const BMI = require('../db/models/Bmi');

exports.handler = async (event, context, callback) => {
    const { clientContext: user } = context;

    if (true) {
        const { httpMethod, body } = event;
        if (!body) {
            callback(null, {
                statusCode: 400,
                body: 'Bad request',
            });
        }
        const parsedBody = JSON.parse(body);
        await getConnection();

        switch (httpMethod) {
            case 'GET':
                try {
                    const { bmi_id } = parsedBody;
                    const res = await BMI.find({ _id: bmi_id });
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify({ response: res, message: 'OK' }),
                    });
                } catch (err) {
                    callback(null, {
                        statusCode: 404,
                        body: JSON.stringify({ response: null, message: 'Not found' }),
                    });
                }
                break;
            case 'POST':
                try {
                    const { user_id, date, weight, height, bmi } = parsedBody;
                    const newBMI = new BMI({
                        user_id,
                        date,
                        weight,
                        height,
                        bmi,
                    });
                    const res = await newBMI.save();
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify({ response: res, message: 'OK' }),
                    });
                } catch (err) {
                    callback(null, {
                        statusCode: 404,
                        body: JSON.stringify({ response: null, message: 'Not found' }),
                    });
                }
                break;
            case 'PATCH':
                try {
                    const { bmi_id, date, weight, height, bmi } = parsedBody;
                    const res = await BMI.updateOne({ _id: bmi_id }, { date, weight, height, bmi });
                } catch (err) {
                    callback(null, {
                        statusCode: 404,
                        body: JSON.stringify({
                            response: null,
                            message: 'Not found',
                        }),
                    });
                }
                break;
            case 'DELETE':
                try {
                    const { bmi_id } = parsedBody;
                    const res = await BMI.deleteOne({ _id: bmi_id });
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify({ response: res, message: 'OK' }),
                    });
                } catch (err) {
                    callback(null, {
                        statusCode: 404,
                        body: JSON.stringify({ response: null, message: 'Not found' }),
                    });
                }
                break;
            default:
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
