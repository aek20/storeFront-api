import { Client } from 'pg';
import pool from './connect';

const order = (id:number) => {
    
// I use release 
    pool.connect((err: Error, client: Client, release: any): void => {
        if (err) {
            return console.error('Error acquiring client', err.stack)
        }
        client.query('SELECT * FROM orders where id =' + id, (err, result) => {
            release();
            if (err) {

                return console.error('Error executing query', err.stack)
            }
            console.log(result.rows)
            return result.rows
        })
    })
}
export default order;