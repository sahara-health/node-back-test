const express = require('express');
const router = express.Router();
//const pool = require("../db/connection");

router.get('/sahara', (req,res)=>{
    res.json({message:"HOALAAA"});
});
module.exports = router;