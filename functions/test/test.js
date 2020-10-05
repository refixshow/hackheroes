exports.handler = function (event, context, callback) {
  console.log("console log from test function")
  callback(null, {
    statusCode: 200,
    body: "POST",
  })
}
