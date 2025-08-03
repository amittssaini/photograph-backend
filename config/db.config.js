const mongoose = require('mongoose');
require('dotenv').config();
const setDatabase=()=>{
    console.log(process.env.DB_URI);
     mongoose
    .connect(process.env.DB_URI)
    .then(()=>console.log("database is connected"))
    .catch((error)=>console.log("db is not connected"));
}
module.exports=setDatabase;