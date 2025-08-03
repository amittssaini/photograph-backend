const router = require('express').Router();
const  postInquiry  = require('../controllers/inquiry.controller');
const inquiryAuthorized=require('../middlewares/inquiry.middleware')
const {clientAuthorized} = require('../middlewares/authorized.middlware')
const passport = require("passport");

//client post the inquiry (but only cleint can access this route)
router.post( '/',  passport.authenticate("jwt",{session:false}),  clientAuthorized,  postInquiry);

module.exports = router;
