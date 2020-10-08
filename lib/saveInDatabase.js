const mongoose = require('mongoose');

const saveInDatabase = (module.exports = (object) => {
    object
        .save()
        .then(() => {
            console.log('object added to db');
        })
        .catch((err) => {
            console.log(err);
            console.log('Error when saving object');
        });
});
