const getConnection = require("../db/index");
const ActivityModel = require("../db/models/Activity");
const FunctionConstructor = require("./lib/functionConstructor");

exports.handler = async (event, context, callback) => {
  const { clientContext: user } = context;

  if (true) {
    const { httpMethod, body } = event;
    if (!body) {
      callback(null, {
        statusCode: 400,
        body: "Bad request",
      });
    }
    const parsedBody = JSON.parse(body);
    await getConnection();
    const Activity = new FunctionConstructor(ActivityModel, parsedBody);

    switch (httpMethod) {
      case "GET":
        try {
          const res = await Activity.get();
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          });
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({
              response: null,
              message: "Not Found",
            }),
          });
        }
        break;
      case "POST":
        try {
          const res = await Activity.post();
          callback(null, {
            statusCode: 201,
            body: JSON.stringify({ response: res, message: "OK" }),
          });
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({
              response: null,
              message: "Not found",
            }),
          });
        }
        break;
      case "PATCH":
        try {
          const res = await Activity.patch();
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          });
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({
              response: null,
              message: "Not found",
            }),
          });
        }
        break;
      case "DELETE":
        try {
          const res = await Activity.delete();
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          });
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({
              response: null,
              message: "Not found",
            }),
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
