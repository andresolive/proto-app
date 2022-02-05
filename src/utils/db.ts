import { Pool } from 'pg';

let connection: any;

if (!connection) {
  connection = new Pool({
    user: 'andres',
    password: 'aolive95',
    host: 'localhost',
    port: 5432,
    database: 'optyfi_dev'
  })
}

export { connection };
