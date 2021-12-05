"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
const id = 111;
// const token = jwt.sign(
//     { userId: id, password: 'ew'},
//     process.env.TOKEN_KEY,
//     {
//         expiresIn: "2h",
//     }
// );
const authorization = "1420";
const create = () => {
    try {
        // const token = authorizationHeader.split(' ')[1]
        const sign = jwt.sign(authorization, "" + process.env.SECRET_KEY_);
        console.log(sign);
        jwt.verify(sign, "" + process.env.TK);
        console.log("token is valid");
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = create;
