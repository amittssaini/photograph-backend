const Joi = require('joi');
const { type } = require('os');
const validator=require('validator')

const userValidationSchema= Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required().custom((value,helper)=>{
        if(!validator.isEmail(value))
            return helper.message("Email is Invalid");
        return value;
    }),
    mobile: Joi.string().min(10).pattern(/^\d+$/).required().messages({
      "string.length": "Mobile number must be exactly 10 digits",
      "string.pattern.base": "Mobile number must contain only digits",
      "any.required": "Mobile number is required"
    }),
    location:Joi.string().required(),
    password:Joi.string().required(),
    role:Joi.string().valid("client","admin","partner").required()
})

module.exports = userValidationSchema;