const userValidationSchema = require("../validations/auth.validate")
const loginValidationSchema=require("../validations/login.validator");
const validateRegisterData = (req,res,next)=>{
    const user = req.body;
    const {error} = userValidationSchema.validate(user);
    if(error)
    {
        res.status(422).json(error.message);
        return;
    }
   next();
}
const validateLoginData=(req,res,next)=>{
    console.log("hello i am middlwware of login ")
     const user = req.body;
    const {error} = loginValidationSchema.validate(user);
    if(error)
    {
        res.status(422).json(error.message);
        return;
    }
   next();
}
module.exports={validateRegisterData,validateLoginData}