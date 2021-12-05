"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = __importDefault(require("./connect"));
const order = (id) => {
    connect_1.default.connect((err, client, release) => {
        if (err) {
            return console.error('Error acquiring client', err.stack);
        }
        client.query('SELECT * FROM orders where id =' + id, (err, result) => {
            release();
            if (err) {
                return console.error('Error executing queryyyy', err.stack);
            }
            console.log(result.rows);
            return result.rows;
        });
    });
};
exports.default = order;
