const Joi = require('joi');

const validator=require('validator')

const loginValidationSchema= Joi.object({
    
    email:Joi.string().required().custom((value,helper)=>{
        if(!validator.isEmail(value))
            return helper.message("Email is Invalid");
        return value;
    }),
    password:Joi.string().required()
  
})

module.exports = loginValidationSchema;