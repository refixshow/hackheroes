const getConnection = require('../db/index');

exports.handler = async (event, context, callback) => {
    const { clientContext: user } = context;

    console.log('USER FROM NETLIFY', user);

    const db = await getConnection();

    callback(null, {
        statusCode: 200,
        body: 'OK',
    });
};
