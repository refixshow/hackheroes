const getConnection = require("../db/index");
const User = require("../db/models/User");

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

    switch (httpMethod) {
      case "GET":
        try {
          const { user_id } = parsedBody;
          const res = await User.find({ _id: user_id });
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
          const { email, name, birth_date } = parsedBody;
          const newUser = new User({
            email,
            name,
            birth_date,
            meta: {
              bmi_his: [],
              pressure_his: [],
              activities_his: [],
            },
          });
          const res = await newUser.save();
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
          const { user_id, email, name, birth_date } = parsedBody;
          const res = await User.updateOne({ _id: user_id }, { email, name, birth_date });
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
          const { user_id } = parsedBody;
          const res = await User.deleteOne({ _id: user_id });
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
