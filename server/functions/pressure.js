const getConnection = require("../db/index")
const Pressure = require("../db/models/Pressure")

exports.handler = async (event, context, callback) => {
  const { clientContext: user } = context
  const db = await getConnection()

  if (true) {
    if (event.httpMethod === "GET") {
      const { pressure_id } = JSON.parse(event.body)
      await Pressure.find({ _id: pressure_id })
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
      const { user_id, date, sys_pressure, dias_pressure, status } = JSON.parse(
        event.body
      )

      const newPressureTest = new Pressure({
        user_id,
        date,
        sys_pressure,
        dias_pressure,
        status,
      })

      await newPressureTest
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
      const {
        pressure_test_id,
        date,
        sys_pressure,
        dias_pressure,
        status,
      } = JSON.parse(event.body)

      Pressure.updateOne(
        { _id: pressure_test_id },
        { date, sys_pressure, dias_pressure, status }
      )
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
      const { pressure_id } = JSON.parse(event.body)

      Pressure.deleteOne({ _id: pressure_id })
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
