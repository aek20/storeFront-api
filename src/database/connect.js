"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Pool, Client } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "1234",
    port: 5432,
});
exports.default = pool;
