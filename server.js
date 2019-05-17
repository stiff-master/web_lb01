// подключаем
const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const routes = require('./routes/routes')
const app = express();

// включаем Node.js парсер body-parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,

}));

routes(app);

// запускаем сервер
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});