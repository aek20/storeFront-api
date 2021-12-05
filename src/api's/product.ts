import express, { Request, Response } from 'express'
import {index ,show} from "../database/databaseProductsQuerey"

const app = express();
app.get('/show', (req, res) =>{
res.send(show());     
})