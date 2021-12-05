"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.index = exports.show = void 0;
const connect_1 = __importDefault(require("./connect"));
// this method will show all product in the database
const show = () => {
    connect_1.default.connect((err, client, release) => {
        if (err) {
            return console.error('Error acquiring client', err.stack);
        }
        client.query('SELECT * FROM product', (err, result) => {
            release();
            if (err) {
                return console.error('Error executing queryyyy', err.stack);
            }
            console.log(result.rows);
            return result.rows;
        });
    });
};
exports.show = show;
// in this method we will take id from user and search in the database  if this this id is exist we will show it
const index = (id) => {
    connect_1.default.connect((err, client, release) => {
        if (err) {
            return console.error('Error acquiring client', err.stack);
        }
        client.query('SELECT * FROM product where id =' + id, (err, result) => {
            release();
            if (err) {
                return console.error('Error executing query', err.stack);
            }
            console.log(result.rows);
            return result.rows;
        });
    });
};
exports.index = index;
const createProduct = (name, price) => {
    connect_1.default.connect((err, client, release) => {
        if (err) {
            return console.error('Error acquiring client', err.stack);
        }
        client.query("INSERT INTO product(name,price) VALUES ('" + name + "','" + price + "');", (err, result) => {
            if (err) {
                return console.error('Error executing query', err.stack);
            }
            console.log(result.rows);
            return result.rows;
        });
    });
};
exports.createProduct = createProduct;
