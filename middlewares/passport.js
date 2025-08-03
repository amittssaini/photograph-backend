const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');
const UserService = require('../services/user.service');
const dotenv = require('dotenv');
dotenv.config();




const UserServiceInstance = new UserService();

const secretKey = process.env.SECRET;
console.log("hello i am passport file ");
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
};

const strategy = new JWTStrategy(options, async (payload, done) => {
  try {
    console.log(process.env.SECRET);
    console.log(payload);
    console.log("hello i am working passport")
    const user = await UserServiceInstance.findUserById(payload.userId);
    console.log(user);
    if (!user) return done(null, false);
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
});


module.exports = (passport) => {
  console.log("✅ hello from passport.js 🚀");
  passport.use(strategy);
};
