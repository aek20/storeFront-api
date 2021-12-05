import { Client } from 'pg';
import pool from './connect';

// this method will show all product in the database
 const show=()=>{
 
pool.connect((err: Error, client: Client, release: any): void => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT * FROM product', (err, result) => {
        release();
        if (err) {
          
            return console.error('Error executing queryyyy', err.stack)
        }
        console.log(result.rows)
        return result.rows
    })})}

    // in this method we will take id from user and search in the database  if this this id is exist we will show it
const index =(id:number)=> { 
pool.connect((err: Error, client: Client, release: any): void => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT * FROM product where id ='+id, (err, result) => {
        release();
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        console.log(result.rows)
        return result.rows;
    })

}
)}
const createProduct = (name: string, price: string) => {
  
        pool.connect((err: Error, client: any, release: any): void => {
            if (err) {
                return console.error('Error acquiring client', err.stack)
            }
  
            client.query("INSERT INTO product(name,price) VALUES ('"+name+"','"+price+"');", (err: any, result: any) => {

          
                if (err) {
                    return console.error('Error executing query', err.stack)
                }
                console.log(result.rows)

                return result.rows;
            }
            )
        }
        )
    
}

export {show ,index,createProduct};