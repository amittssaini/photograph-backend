const { byte } = require('webidl-conversions');
const User = require('../models/user.model');
const UserService = require("./user.service")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require("dotenv").config();
class Auth{
 generateMockOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit
};
  signup=async(payload)=>{
    try {
        console.log("hello i am signup")
        const hashPass = await this.hashingPassword(payload.password);
        const newUserDoc =  new User({...payload,password:hashPass});
         const otp = generateMockOTP();

    
        console.log(`📱 Mock OTP sent to ${mobile}: ${otp}`);
        const response = await newUserDoc.save();
        console.log("hello i am resp ", response);
        return response;
    } catch (error) {

    }

  }
  login=(userId,plainPassword,hashPassword)=>{
    try {
        console.log("plain pass ",plainPassword," hash pass ", hashPassword);
        const passwordMatch = this.verifyPassword(plainPassword,hashPassword);
        if(!passwordMatch) return false;
        console.log("token code aout")
        let token = this.genterateToken(userId)
        return token
    } catch (error) {
        throw error;
    }
  
  }


  hashingPassword=async(password)=>{
   const salt = await bcrypt.genSalt();
    return(await bcrypt.hash(password,salt));
  }
  verifyPassword=async(plainPassword,hashPassword)=>{
    return await bcrypt.compare(plainPassword,hashPassword);
  }
   secretKey = process.env.SECRET;
  genterateToken=async(userId)=>{
    try {
        const payload = {userId};
        const option = {expiresIn:"1h"};
        const token = jwt.sign(payload,this.secretKey,option);
        console.log("in the token method ", token);
        return token;
    } catch (error) {
        throw error;
    }

  }

  
}
module.exports=Auth;