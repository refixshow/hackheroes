const mongoose = require("mongoose");

let cachedDB = null;
const uri = process.env.DB_PATH;

const getConnection = async () => {
  if (!cachedDB) {
    cachedDB = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  return cachedDB;
};

module.exports = getConnection;
