// Index.js for DB
// Checks if database connection is already established
// IF NOT connects to database
const mongoose = require('mongoose');

let cachedDB = null;
const uri = process.env.DB_PATH;

const getConnection = async () => {
    if (cachedDB == null) {
        cachedDB = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    return cachedDB;
};

module.exports = getConnection;

// TO DO
// wyczyscic te gowno funkcje
// klasy i metody
// usuwanie testow itp usuwa je z tablic usera
// osobne funkcje do kazdej funkcjonalnosci
