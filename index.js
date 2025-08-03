const app = require('./app');
require('dotenv').config();
const setDatabase = require('./config/db.config');

setDatabase();
app.listen((process.env.PORT),()=>console.log("server is connected at port ",process.env.PORT));
