const getConnection = require("../db/index");
const PressureModel = require("../db/models/Pressure");
const FunctionConstructor = require("../helpers/FunctionConstructor");

exports.handler = async (event, context, callback) => {
  const { clientContext: user } = context;

  if (true) {
    const { httpMethod, body } = event;
    const params = event.queryStringParameters;

    if (!body && Object.keys(params).length === 0) {
      callback(null, {
        statusCode: 400,
        body: "Bad request",
      });
    }
    const parsedBody = body ? JSON.parse(body) : {};

    await getConnection();
    const Pressure = new FunctionConstructor(PressureModel, parsedBody);

    switch (httpMethod) {
      case "GET":
        try {
          const res = await Pressure.get();
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          });
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({ response: null, message: "Not found" }),
          });
        }
        break;
      case "POST":
        try {
          const res = await Pressure.post();
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          });
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({ response: null, message: "Not found" }),
          });
        }
        break;
      case "PATCH":
        try {
          const res = await Pressure.patch();
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          });
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({ response: null, message: "Not found" }),
          });
        }
        break;
      case "DELETE":
        try {
          const res = await Pressure.delete();
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          });
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({ response: null, message: "Not found" }),
          });
        }
        break;
      default:
        callback(null, {
          statusCode: 400,
          body: "Bad request",
        });
    }
  } else {
    callback(null, {
      statusCode: 401,
      body: "Unauthorized request",
    });
  }
};
