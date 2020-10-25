// Index.js for DB
// Checks if database connection is already established
// IF NOT connects to database
const mongoose = require("mongoose")

let cachedDB = null
const uri = process.env.DB_PATH

const getConnection = async () => {
  if (!cachedDB) {
    cachedDB = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }

  console.log(
    cachedDB,
    "IS CONNECTING -----------------------------------------"
  )
  return cachedDB
}

module.exports = getConnection
