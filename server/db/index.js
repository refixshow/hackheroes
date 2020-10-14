const mongoose = require("mongoose")

let cachedDB = null

const saveInDatabase = (module.exports = (object) => {
  object
    .save()
    .then(() => {
      console.log("object added to db")
    })
    .catch((err) => {
      console.log(err)
      console.log("Error when saving object")
    })
})

const connectToDatabase = (module.exports = async () => {
  if (cachedDB) {
    console.log("Use existing connection")
    return Promise.resolve(cachedDB)
  } else {
    return mongoose
      .connect("mongodb://localhost/hackheroes", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("New DB connection")
        cachedDB++
        return cachedDB
      })
      .catch((err) => {
        console.log("Mongo Connection Error")
        console.log(err)
      })
  }
})
