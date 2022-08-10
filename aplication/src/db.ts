import  { Pool } from 'pg';

const connectionString = 'postgres://jfbeswxt:LEefnWgp5l1oEN86mlIXGtnJKIUL9Xnu@tuffi.db.elephantsql.com/jfbeswxt';
const db = new Pool({ connectionString })

export default db;
