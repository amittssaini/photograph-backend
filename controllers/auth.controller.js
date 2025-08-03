const AuthService = require('../services/auth.service');
const UserService = require("../services/user.service");
const AuthServiceInstance = new AuthService();
const UserServiceInstance = new UserService();


const postSignup=async(req,res)=>{
 
    try {
      console.log(req.body);
      let response = await AuthServiceInstance.signup(req.body);
      res.status(201).json({"sucess":true,message:response}); 
    } catch (error) {
      res.status(500).json({"sucess":false,"message":"Something wrong , try again"}); 
    }
}

const postLogin=async(req,res)=>{
try {
    console.log(req.body);
    let isUserValid = await UserServiceInstance.findUserByEmail(req.body.email);
    if(!isUserValid) res.status(404).json({isLogin:false,message:"user not found"})
    console.log(isUserValid.password, req.body.password);
    const {_id,password} = isUserValid
    let response = await AuthServiceInstance.login(_id,req.body.password,password);
    if(!response) res.status(401).json({isLogin:false,message:"password  not match"})
    res.status(200).json({isLogin:true,message:"login Sucessfully","token":response})
} catch (error) {
    res.status(500).json({"sucess":false,"message":"Something wrong , try again"});
}
}

module.exports = {postSignup,postLogin}