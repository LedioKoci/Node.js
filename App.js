express = require('express');

app = express();

app.get('/get', (req, res) => {
    res.send("ciao a tutti!");
});

port = 5050;
app.listen(port, () => {console.log(`Listening on port ${port}..`)});