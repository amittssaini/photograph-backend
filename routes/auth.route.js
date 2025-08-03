const router = require('express').Router();
const{postSignup,postLogin}= require('../controllers/auth.controller');
const {validateRegisterData,validateLoginData}=require('../middlewares/validate.middlware');

router.post('/signup',validateRegisterData,postSignup);
router.post('/login',validateLoginData,postLogin);

module.exports = router;