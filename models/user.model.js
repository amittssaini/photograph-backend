
const mongoose=require('mongoose');

const userSchema =  new mongoose.Schema({
    name:{type:String,required:true},
    mobile: { type: String, required: true, match: [/^\d{10}$/, "Mobile number must be 10 digits"],},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    location:{type:String,required:true},
    role:{type:String, required:true,enum: ['client', 'partner', 'admin'], default: 'client'}
},{timestamps:true}
)

const userModel = mongoose.model("User",userSchema);
module.exports = userModel;