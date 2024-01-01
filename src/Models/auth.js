var passport = require('passport')
var LocalStrategy = require('passport-local')
var crypto = require('crypto')

async function Authenticate(user,req){
    console.log('lobster')
    passport.use(new LocalStrategy(function verify(cb) {
        console.log('schleem')
          crypto.pbkdf2(req.body["PASSWORD"], user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
            console.log('schlop')
            if (err) { return cb(err); }
            console.log("ping")
            if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
                console.log('pang')
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