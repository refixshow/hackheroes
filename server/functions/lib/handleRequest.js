//    //=========\\
//    ||         ||
//    ||  R.I.P. ||
//    ||  2020   ||
//    ||_________||

const handleRequest = (given, expected) => {
  return new Promise((resolve, reject) => {
    const keys = Object.keys(given);

    if (keys.length !== expected.length) {
      return reject("Bad Request");
    }
    keys.forEach((key) => {
      if (!expected.includes(key)) {
        return reject("Bad Request");
      }
    });
  });
};

module.exports = handleRequest;
