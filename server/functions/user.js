const getConnection = require("../db/index");
const UserModel = require("../db/models/user");
const FunctionConstructor = require("../helpers/FunctionConstructor");

exports.handler = async (event, context, callback) => {
  const { clientContext: user } = context;

  if (true) {
    const { httpMethod, body } = event;
    const params = event.queryStringParameters;

    let parsedBody = {};

    if (Object.keys(params).length === 0) {
      if (!body) {
        callback(null, {
          statusCode: 400,
          body: "Bad request",
        });
      } else {
        parsedBody = JSON.parse(body);
      }
    }

    await getConnection();
    const User = new FunctionConstructor(UserModel, parsedBody, params);

    switch (httpMethod) {
      case "GET":
        try {
          const res = await User.get();
          return {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          };
        } catch (err) {
          return {
            statusCode: 404,
            body: JSON.stringify({ response: null, message: "Not found" }),
          };
        }
        break;
      case "POST":
        try {
          const res = await User.post();
          return {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          };
        } catch (err) {
          return {
            statusCode: 404,
            body: JSON.stringify({ response: null, message: "Not found" }),
          };
        }
        break;
      case "PATCH":
        try {
          const res = await User.patch();
          return {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          };
        } catch (err) {
          return {
            statusCode: 404,
            body: JSON.stringify({ response: null, message: "Not found" }),
          };
        }
        break;
      case "DELETE":
        try {
          const res = await User.delete();
          return {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          };
        } catch (err) {
          return {
            statusCode: 404,
            body: JSON.stringify({ response: err, message: "Not found" }),
          };
        }
        break;
      default:
        return {
          statusCode: 400,
          body: "Bad request",
        };
    }
  } else {
    return {
      statusCode: 401,
      body: "Unauthorized request",
    };
  }
};
