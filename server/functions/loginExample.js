exports.handler = async (event, context, callback) => {
  const { clientContext: user } = context

  console.log("USER FROM NETLIFY", user)

  callback(null, {
    statusCode: 200,
    body: "OK",
  })
}
