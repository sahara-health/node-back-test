const express = require('express');
const morgan = require('morgan');

//const pool = require("./db/connection");
const ROUTES = require('./routes/index.routes.js');

const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.json());  
app.use(express.urlencoded({extended: true})); 
app.use(ROUTES); 
app.use(morgan("dev"));
app.listen(PORT,(req,res)=>{
    console.log("Servicio names conectado a puerto ",PORT);
});