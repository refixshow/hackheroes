const getConnection = require("../db/index")
const User = require("../db/models/User")

exports.handler = async (event, context, callback) => {
  const { clientContext: user } = context
  await getConnection()

  if (true) {
    if (event.httpMethod === "GET") {
      const { user_id } = JSON.parse(event.body)
      await User.find({})
        .then((res) => {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          })
        })
        .catch((err) => {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({ response: err, message: "Not found" }),
          })
        })
    } else if (event.httpMethod === "POST") {
      const { email, name, birth_date } = JSON.parse(event.body)

      const newUser = new User({
        email,
        name,
        birth_date,
        meta: {
          bmi_his: [],
          pressure_his: [],
          activities_his: [],
        },
      })

      await newUser
        .save()
        .then((res) => {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          })
        })
        .catch((err) => {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({ response: err, message: "Not found" }),
          })
        })
    } else if (event.httpMethod === "PATCH") {
      const { user_id, email, name, birth_date } = JSON.parse(event.body)

      await User.updateOne({ _id: user_id }, { email, name, birth_date })
        .then((res) => {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          })
        })
        .catch((err) => {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({ response: err, message: "Not found" }),
          })
        })
    } else if (event.httpMethod === "DELETE") {
      const { user_id } = JSON.parse(event.body)

      User.deleteOne({ _id: user_id })
        .then((res) => {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ response: res, message: "OK" }),
          })
        })
        .catch((err) => {
          callback(null, {
            statusCode: 404,
            body: JSON.stringify({ response: err, message: "Not found" }),
          })
        })
    } else {
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
