
const mongoose=require('mongoose');

const inquirySchema =  new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category:{type:String,required:true},
    city:{type:String,required:true},
    date:{type:Date,required:true},
    budget:{type:Number},
    description:{type:String, default: ''},
    mobile:{type:String,required:true},
    status:{type:String,enum: ['new', 'booked', 'closed','responded'], default: 'new'}
},{timestamps:true}
)

const inquiryModel = mongoose.model("Inquiry",inquirySchema);
module.exports = inquiryModel;