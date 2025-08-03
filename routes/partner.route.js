const router = require('express').Router();
const passport = require("passport");
const  {getLeads,postPortforlio,postPartnerDetails}  = require('../controllers/partner.controller')
//const inquiryAuthorized=require('../middlewares/inquiry.middleware')
//const passport = require("passport");

router.get( '/leads',getLeads); // to get the inquiry 
router.post('/portforlio',passport.authenticate("jwt",{session:false}),postPortforlio) // to provide the portforlio of her studio 
router.post('/details', passport.authenticate("jwt",{session:false}),postPartnerDetails); // to provide the details of us 


module.exports = router;
