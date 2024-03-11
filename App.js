express = require('express');
connection = require('./Db');
require('dotenv').config();

app = express();
app.use(express.json());

app.get('/get', (req, res) => {
    res.send("ciao a tutti!");
});

try {
    connection(process.env.DATABASE_PATH)
    app.listen(process.env.port, () => {console.log(`Listening on port ${process.env.port}..`)});
} catch (error) {
    () => {
        console.log(error);
    };
}
