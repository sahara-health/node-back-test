const {Pool} = require('pg');
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString
})

const query = `
CREATE TABLE message(
    id serial PRIMARY KEY,
    text varchar
    )`;
pool.query(query,(err,res)=>{
    if (err){
        console.log(err.message);
        return;
    }
    console.log("------------------------------");
    console.log("Tabla creada");
})


module.exports = pool;