const UserModel = require("../models/user.model");
class User{
    findUserByEmail=async(email)=>{
        try {
            console.log(email);
            const resp= await UserModel.findOne({email});
             console.log("finding email",resp);
             return resp;
        } catch (error) {
            throw error;
            
        }
    }
    findUserById=async(userId)=>{
        try {
            const resp = await UserModel.findById(userId);
            return resp;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = User;