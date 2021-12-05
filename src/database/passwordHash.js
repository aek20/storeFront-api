"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcrypt');
const saltRounds = 10;
const connect_1 = __importDefault(require("./connect"));
const hashing = (firstname, lastName, myPlaintextPassword) => {
    bcrypt.hash(myPlaintextPassword, 6, function (err, hash) {
        connect_1.default.connect((err, client, release) => {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            client.query("INSERT INTO users(firstname,password,lastname) VALUES ('" + firstname + "','" + hash + "','" + lastName + "');", (err, result) => {
                //   "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";  release();
                if (err) {
                    return console.error('Error executing query', err.stack);
                }
                console.log(result.rows);
                console.log(hash);
                return result.rows;
            });
        });
    });
};
exports.default = hashing;
