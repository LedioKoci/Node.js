require('dotenv').config();
express = require('express');
connection = require('./database/Db');
routes = require('../backend-users-crud/routes/Router');

app = express();
app.use(express.json());

app.use('/', routes);

try {
    connection(process.env.DATABASE_PATH)
    app.listen(process.env.port, () => {console.log(`Listening on port ${process.env.port}..`)});
} catch (error) {
    () => {
        console.log(error);
    };
}
