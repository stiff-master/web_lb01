// данные формата JSON
const users = [{
        id: 1,
        name: "Купцов Николай",
        email: "nkuptsov@bmstu.ru",
    },
    {
        id: 2,
        name: "free cell",
        email: "empty",
    },
];

// Некий формат роутера
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Running Node.js & Express API'
        });
    });
    app.post('/', (request, response) => {
        response.send({
            message: 'BAD RESPONSE'
        });
    });
    app.options('/', (request, response) => {
        response.send(users);
    });
}

// экспорт
module.exports = router;