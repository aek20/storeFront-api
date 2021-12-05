import { Client } from 'pg';
const bcrypt = require('bcrypt');
const saltRounds = 10;
import pool from './connect';
//create new user 
const hashing = (firstname: string, lastName:string,myPlaintextPassword:any)=>{
    bcrypt.hash(myPlaintextPassword, 6, function (err:any, hash:any) {
        pool.connect((err: Error, client: any, release: any): void => {
            if (err) {
                return console.error('Error acquiring client', err.stack)
            }
            client.query("INSERT INTO users(firstname,password,lastname) VALUES ('"+firstname+"','"+hash+"','"+lastName+"');", (err:any, result:any) => {
 
            //   "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";  release();
                if (err) {
                    return console.error('Error executing query', err.stack)
                }
                console.log(result.rows)
                console.log(hash)
                return result.rows;
            }
            )
        }
        )
    })}
    
    //show method to show all method in users table
const showUsers = () => {
  

    pool.connect((err: Error, client: Client, release: any): void => {
        if (err) {
            return console.error('Error acquiring client', err.stack)
        }
        client.query('SELECT * FROM users', (err:any, result:any) => {
            release();
            if (err) {

                return console.error('Error executing queryyyy', err.stack)
            }
            console.log(result.rows)
            return result.rows
        })
    })
}
const userIndex = (id: number) => {
    pool.connect((err: Error, client: Client, release: any): void => {
        if (err) {
            return console.error('Error acquiring client', err.stack)
        }
        client.query('SELECT * FROM users where id =' + id, (err, result) => {
            release();
            if (err) {
                return console.error('Error executing query', err.stack)
            }
            console.log(result.rows)
            return result.rows;
        })

    }
    )
}

export {hashing,showUsers,userIndex};


