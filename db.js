const{Pool,Client}=require('pg');

const pool= new Pool({
user:"postgres",
password:"147899891",
host:"localhost",
port:"5432",
database:"students"
});


module.exports=pool;