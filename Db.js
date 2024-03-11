mongoose = require('mongoose');

const connection = (db) => {
    mongoose.connect(db)
    .then(() => console.log(`Connection with database is setup..`))
    .catch((err) => {
        console.log(err)
    });
};

module.exports = connection;