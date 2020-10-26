exports.handler = async (event, context) => {
  const contextt = context

  console.log("CONTEXT -----------------", contextt)

  return {
    statusCode: 200,
    body: "ok",
  }
}
