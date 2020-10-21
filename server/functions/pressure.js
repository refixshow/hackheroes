const getConnection = require('../db/index');
let Pressure = require('../db/models/pressure');

exports.handler = async (event, context, callback) => {
    const { clientContext: user } = context;

    if (true) {
        if (event.httpMethod === 'GET') {
            const db = await getConnection();

            const pressure = (await Pressure.find({})).toString();

            callback(null, {
                statusCode: 200,
                body: pressure,
            });
        } else if (event.httpMethod === 'POST') {
            const db = await getConnection();
            const { user_id, date, sys_pressure, dias_pressure, status } = JSON.parse(event.body);

            const newPressureTest = new Pressure({
                user_id,
                date,
                sys_pressure,
                dias_pressure,
                status,
            });

            newPressureTest.save();

            callback(null, {
                statusCode: 201,
                body: 'Pressure test saved',
            });
        } else if (event.httpMethod === 'PATCH') {
            const db = await getConnection();
            const { pressure_test_id, date, sys_pressure, dias_pressure, status } = JSON.parse(event.body);

            Pressure.updateOne({ id: pressure_test_id }, { date, sys_pressure, dias_pressure, status });

            callback(null, {
                statusCode: 200,
                body: 'OK',
            });
        } else if (event.httpMethod === 'DELETE') {
            const db = await getConnection();

            const { pressure_test_id } = JSON.parse(event.body);

            Pressure.deleteOne({ id: pressure_test_id });

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
