const express = require('express');
const authRouter = require('./routes/auth.route');
const inquiryRouter = require('./routes/inquiry.route')
const partnerRouter=require('./routes/partner.route')
const adminRouter  = require('./routes/admin.route');
const configurePassport=require('./middlewares/passport');
const passport = require('passport');

const app = express();

app.use(express.json());
app.use(passport.initialize())
configurePassport(passport);


app.use('/api/auth/',authRouter);
app.use('/api/inquiry',inquiryRouter)
app.use('/api/partner',partnerRouter)
app.use('/api/admin',adminRouter)

module.exports = app;