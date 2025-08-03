const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  partnerId: {type: mongoose.Schema.Types.ObjectId,ref: 'User', required: true},
  imageUrl: { type: String,required: true },
  caption: { type: String, default: ''},
  index: { type: Number,default: 0}
}, { timestamps: true }
);



const partnerVerificationSchema = new mongoose.Schema({
  partnerId: {  type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  serviceDetails: { type: String, required: true },
  aadharNumber: {  type: String, required: true },
  documentUrl: { type: String, },
  status: {type: String,enum: ['pending', 'verified', 'rejected'],default: 'pending' },
  adminComment: { type: String,default: ''}
  }, { timestamps: true }
);

const PartnerVerificationModel = mongoose.model('PartnerVerification', partnerVerificationSchema);
const PortfolioModel = mongoose.model('Portfolio', portfolioSchema);
module.exports = PartnerVerificationModel;
module.exports = PortfolioModel;

