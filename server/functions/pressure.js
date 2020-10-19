const getConnection = require('../db/index');
let Pressure = require('../db/models/bmi');

exports.handler = async (event, context, callback) => {
    const { clientContext: user } = context;

    if (true) {
        if (event.httpMethod === 'GET') {
            const db = await getConnection();

            const pressure = JSON.stringify(await Pressure.find({}));

            callback(null, {
                statusCode: 200,
                body: 'OK',
            });
        } else if (event.httpMethod === 'POST') {
            const db = await getConnection();
            const { user_id, date, sys_pressure, dias_pressure, status } = event.headers;

            const newPressureTest = new Pressure({
                user_id,
                date,
                sys_pressure,
                dias_pressure,
                status,
            });

            newPressureTest.save().catch((err) => console.log(err));

            callback(null, {
                statusCode: 200,
                body: 'Pressure test saved',
            });
        } else if (event.httpMethod === 'PATCH') {
            const db = await getConnection();
            const { pressure_test_id, date, sys_pressure, dias_pressure, status } = event.headers;

            Pressure.updateOne({ id: pressure_test_id }, { date, sys_pressure, dias_pressure, status });

            callback(null, {
                statusCode: 200,
                body: 'OK',
            });
        } else if (event.httpMethod === 'DELETE') {
            const db = await getConnection();

            const { pressure_test_id } = event.headers;

            Pressure.deleteOne({ id: pressure_test_id });

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
