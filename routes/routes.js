// ������ ������� JSON
const users = [{
        id: 1,
        name: "������ �������",
        email: "nkuptsov@bmstu.ru",
    },
    {
        id: 2,
        name: "free cell",
        email: "empty",
    },
];

// ����� ������ �������
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

// �������
module.exports = router;