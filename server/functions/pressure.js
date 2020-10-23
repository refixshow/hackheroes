const getConnection = require('../db/index');
const Pressure = require('../db/models/Pressure');

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
                    const { pressure_id } = parsedBody;
                    const res = await Pressure.find({ _id: pressure_id });
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
                    const { user_id, date, sys_pressure, dias_pressure, status } = parsedBody;
                    const newPressure = new Pressure({
                        user_id,
                        date,
                        sys_pressure,
                        dias_pressure,
                        status,
                    });
                    const res = await newPressure.save();
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
                    const { pressure_test_id, date, sys_pressure, dias_pressure, status } = parsedBody;
                    const res = await Pressure.updateOne({ _id: pressure_test_id }, { date, sys_pressure, dias_pressure, status });
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
            case 'DELETE':
                try {
                    const { pressure_id } = parsedBody;
                    const res = await Pressure.deleteOne({ _id: pressure_id });
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
