import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import {show ,createProduct ,index}from '../database/databaseProductsQuerey'
import {hashing,showUsers} from '../database/databaseUsersQuerey'
import jwt from '../jwt/jwt'
import order from '../database/databaseOrdersQuerey'
// require("dotenv").config();
const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

// here if you use this get it is response will be all products in the database
app.get('/showproduct', (req, res) => {

  const data=show();

})

//this get will return specific product in the database
app.get('/productindex', (req,res)=>{
  const productIndex=index(req.body.id);
  console.log(productIndex)
})

// here you will send user data to create new one 
app.post('/createuser', (req, res) => {
  jwt()
const password=req.body.password;
const firstName=req.body.firstName;
const lastName=req.body.lastName;
console.log(password)
const passHash=hashing(firstName, lastName,password);
console.log(passHash);


  });

//this get will return all users in the database
  app.get('/showusers',(req, res)=>{
 
    jwt()
    const usersData=showUsers();
    console.log(usersData);
    res.send("hi")
  })
// this post will send product data to add to the database
app.post('/createProduct',(req, res)=>{
 const name= req.body.name
 const price =req.body.price;
 createProduct(name,price)

})
 //Current Order by user (args: user id)[token required]
app.get('/orders', (req, res)=>{
  jwt()
  const id=req.body.id;
  order(id)
})
app.get('/userindex', (req, res) => {
  const userIndex = index(req.body.id);
  console.log(userIndex)
})

