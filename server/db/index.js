// Index.js for DB
// Checks if database connection is already established
// IF NOT connects to database
const { createConnection } = require('mongoose');

let connection = null;
const uri = process.env.DB_PATH;

const getConnection = async () => {
    if (connection == null) {
        connection = await createConnection(uri, {
            bufferCommands: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
    }

    return connection;
};

module.exports = getConnection;

// TO DO
// wyczyscic te gowno funkcje
// klasy i metody
// usuwanie testow itp usuwa je z tablic usera
// osobne funkcje do kazdej funkcjonalnosci
