const mongoose = require("mongoose")

const saveInDatabase = (module.exports = (object) => {
  object
    .save()
    .then(() => {
      console.log("bmi wage eihawd")
    })
    .catch((err) => {
      console.log(err)
      console.log("Error when saving object")
    })
})
