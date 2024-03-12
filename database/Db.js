mongoose = require('mongoose');

const connection = (db) => {
    mongoose.connect(db)
    .then(() => {
        console.log("connection to database set up")
    })
    .catch((err) => {
        console.log(err);
    });
};

module.exports = connection;