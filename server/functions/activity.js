const getConnection = require("../db/index")
const Activity = require("../db/models/Activity")

exports.handler = async (event, context, callback) => {
  const { clientContext: user } = context

  if (true) {
    const { httpMethod, body } = event

    if (!body) {
      callback(null, {
        statusCode: 400,
        body: "Bad request",
      })
    }
    const parsedBody = JSON.parse(body)

    await getConnection()

    switch (httpMethod) {
      case "GET":
        try {
          const { activity_id } = parsedBody
          const res = await Activity.find({ _id: activity_id })
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          })
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({
              response: null,
              message: `Not Found, ${err}`,
            }),
          })
        }
        break
      case "POST":
        try {
          const { user_id, type, length, calories, date } = parsedBody
          const newActivity = new Activity({
            user_id,
            type,
            length,
            calories,
            date,
          })
          const res = await newActivity.save()
          callback(null, {
            statusCode: 201,
            body: JSON.stringify({ response: res, message: "OK" }),
          })
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({
              response: null,
              message: `Not found, ${err}`,
            }),
          })
        }
        break
      case "PATCH":
        try {
          const { activity_id, type, length, calories, date } = parsedBody
          const res = await Activity.updateOne(
            { _id: activity_id },
            { type, length, calories, date }
          )
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          })
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({
              response: null,
              message: `Not found, ${err}`,
            }),
          })
        }
        break
      case "DELETE":
        try {
          const { activity_id } = parsedBody
          const res = await Activity.deleteOne({ _id: activity_id })
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          })
        } catch (err) {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({
              response: null,
              message: `Not found, ${err}`,
            }),
          })
        }
        break
      default:
        callback(null, {
          statusCode: 400,
          body: "Bad request",
        })
    }
  } else {
    callback(null, {
      statusCode: 401,
      body: "Unauthorized request",
    })
  }
}