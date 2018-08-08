const express = require("express");
const bodyParser = require("body-parser");

const model = require("./model");

class Application {
    constructor() {
        this.expressApp = express();
        this.manager = new model.UserManager();
        this.attachRoutes();
    }

    attachRoutes() {
        let app = this.expressApp;

        let jsonParser = bodyParser.json();

        app.post("/updateuser/:id", jsonParser, this.updateUserHandler.bind(this));
        app.get("/adduser", this.createUserHandler.bind(this));
        app.get("/users/:id", this.getUserHandler.bind(this));
    }

    createUserHandler(req, res) {
        let newUsrId = this.manager.addUser();
        newUsrId.then(id => res.json(id)).catch(e => console.error(e.stack));
    }

    getUserHandler(req, res) {
        // Получаем usera по ID
        let user = this.manager.getById(req.params.id);
        user.then(userData => {
            let response = {
                user: userData
            };
            res.json(response);
        }).catch(e => console.error(e.stack));
    }

    updateUserHandler(req, res) {
        let upd = this.manager.updateUser(req.params.id, req.body);
        upd.then(result => {
            if (!result) {
                let response = {
                    error: "No such ID"
                };
                res.json(response);
                console.log("Updaiting user info failed!", response.error);
            } else {
                let response = {
                    success: "User info updated"
                };
                res.json(response);
                console.log("User info updated");
            }
        })
        .catch(e => console.error(e.stack));
    }
}

module.exports = Application;
