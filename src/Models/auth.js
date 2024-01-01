var passport = require('passport')
var LocalStrategy = require('passport-local')
var crypto = require('crypto')

async function Authenticate(user,req){
    passport.use(new LocalStrategy(function verify(cb) {
          crypto.pbkdf2(req.body["PASSWORD"], user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
            if (err) { return cb(err); }
            if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
              return cb(null, false, { message: 'Incorrect username or password.' });
            }
            console.log('chaching')
            return cb(null, user);
          });
      }));
}

module.exports={
    Authenticate,
}