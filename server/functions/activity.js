const getConnection = require("../db/index")
const ActivityModel = require("../db/models/activity")
const FunctionConstructor = require("../helpers/FunctionConstructor")

exports.handler = async (event, context, callback) => {
  const { clientContext: user } = context

  console.log("user---------------------", user)

  if (true) {
    const { httpMethod, body } = event
    const params = event.queryStringParameters

    let parsedBody = {}

    if (Object.keys(params).length === 0) {
      if (!body) {
        return {
          statusCode: 400,
          body: "Bad request",
        }
      } else {
        parsedBody = JSON.parse(body)
      }
    }

    await getConnection()
    const Activity = new FunctionConstructor(ActivityModel, parsedBody, params)

    switch (httpMethod) {
      case "GET":
        try {
          const res = await Activity.get()
          return {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          }
        } catch (err) {
          return {
            statusCode: 404,
            body: JSON.stringify({
              response: null,
              message: "Not Found",
            }),
          }
        }
        break
      case "POST":
        try {
          const res = await Activity.post()
          return {
            statusCode: 201,
            body: JSON.stringify({ response: res, message: "OK" }),
          }
        } catch (err) {
          return {
            statusCode: 404,
            body: JSON.stringify({
              response: null,
              message: "Not found",
            }),
          }
        }
        break
      case "PATCH":
        try {
          const res = await Activity.patch()
          return {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          }
        } catch (err) {
          return {
            statusCode: 404,
            body: JSON.stringify({
              response: null,
              message: "Not found",
            }),
          }
        }
        break
      case "DELETE":
        try {
          const res = await Activity.delete()
          return {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          }
        } catch (err) {
          return {
            statusCode: 404,
            body: JSON.stringify({
              response: null,
              message: "Not found",
            }),
          }
        }
        break
      default:
        return {
          statusCode: 400,
          body: "Bad request",
        }
    }
  } else {
    return {
      statusCode: 401,
      body: "Unauthorized request",
    }
  }
}
