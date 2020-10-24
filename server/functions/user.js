const getConnection = require("../db/index");
const UserModel = require("../db/models/User");
const FunctionConstructor = require("./lib/functionConstructor");

exports.handler = async (event, context, callback) => {
  const { clientContext: user } = context;
  await getConnection();

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
    const User = new FunctionConstructor(UserModel, parsedBody);

    switch (httpMethod) {
      case "GET":
        try {
          const res = await User.get();
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
          const res = await User.post();
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
          const res = await User.patch();
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
          const res = await User.delete();
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          });
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({ response: err, message: "Not found" }),
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
