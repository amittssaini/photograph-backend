const router=require('express').Router();
const  {getVerification,putVerifyPartner}  = require('../controllers/admin.controller')
//const passport = require("passport");

router.get( '/verifications',getVerification);
router.put('/verify/:id',putVerifyPartner)

module.exports = router;
