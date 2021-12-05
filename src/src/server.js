"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const databaseProductsQuerey_1 = require("../src/database/databaseProductsQuerey");
const databaseUsersQuerey_1 = require("./database/databaseUsersQuerey");
const jwt_1 = __importDefault(require("./jwt/jwt"));
const databaseOrdersQuerey_1 = __importDefault(require("./database/databaseOrdersQuerey"));
// require("dotenv").config();
const app = (0, express_1.default)();
const address = "0.0.0.0:3000";
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(8777, function () {
    console.log(`starting app on: ${address}`);
});
// here if you use this get it is response will be all products in the database
app.get('/showproduct', (req, res) => {
    const data = (0, databaseProductsQuerey_1.show)();
});
//this get will return specific product in the database
app.get('/productindex', (req, res) => {
    const productIndex = (0, databaseProductsQuerey_1.index)(1);
    console.log(productIndex);
});
// here you will send user data to create new one 
app.post('/createuser', (req, res) => {
    (0, jwt_1.default)();
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    console.log(password);
    const passHash = (0, databaseUsersQuerey_1.hashing)(firstName, lastName, password);
    console.log(passHash);
    res.send("hi ");
});
//this get will return all users in the database
app.get('/showusers', (req, res) => {
    (0, jwt_1.default)();
    const usersData = (0, databaseUsersQuerey_1.showUsers)();
    console.log(usersData);
    res.send("hi");
});
// this post will send product data to add to the database
app.post('/createProduct', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    (0, databaseProductsQuerey_1.createProduct)(name, price);
});
//Current Order by user (args: user id)[token required]
app.get('/orders', (req, res) => {
    (0, jwt_1.default)();
    const id = req.body.id;
    (0, databaseOrdersQuerey_1.default)(id);
});
