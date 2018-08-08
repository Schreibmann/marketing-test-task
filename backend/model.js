const { Client } = require("pg"); //node-postgres

const connection = require("./db_config.json"); //db settings

class UserManager {
    addUser() { // Добавляем юзера и получаем его ID в ответе
        const client = new Client(connection);
        client.connect();

        const query = {
            name: "add-user",
            text: "INSERT INTO users(shared, email) VALUES($1, $2) RETURNING id",
            values: [false, null]
        };

        return client
            .query(query)
            .then(res => {
                return res.rows[0];
                client.end();
            })
            .catch(e => {
                console.error(e.stack); 
                client.end();  
            });
    }

    // Получаем юзера по id
    getById(id) {
        const client = new Client(connection);
        client.connect();

        const query = {
            name: "fetch-user",
            text: "SELECT * FROM users WHERE id = $1",
            values: [id]
        };

        return client
            .query(query)
            .then(res => {
                return res.rows[0];
                client.end();
            })
            .catch(e => {
                console.error(e.stack); 
                client.end();  
            });
    }

    updateUser(id, data) { 
        const client = new Client(connection);
        client.connect();
        
        // Смотрим какое поле апдейтить
        let key = Object.keys(data);
        let row = key[0].toString();
        let val = data[key[0]];

        const query = {
            name: "update-user",
            text: "UPDATE users SET " +row+ " = $1 WHERE id = $2", 
            values: [val, id]
        };

        return client
            .query(query)
            .then(res => {
                return res.rowCount > 0; // 0 будет означать что запрос не обработал ни одного поля в базе
                client.end();
            })
            .catch(e => {
                console.error(e.stack); 
                client.end();  
            });
    }
}

module.exports = { UserManager };
