exports.handler = async (event, context, callback) => {
  const { clientContext: user } = context

  console.log("USER FROM NETLIFY", user)

  // without login it doesnt show 'user' in object response

  callback(null, {
    statusCode: 200,
    body: "OK",
  })
}
