var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');
var connection = require('./Models/db');

async function Authenticate(){
    passport.use(new LocalStrategy(function verify(username, password, cb) {
        connection.query('SELECT * FROM USER WHERE username = ?', [ username ], function(err, row) {
          if (err) { return cb(err); }
          if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }
          const user = row[0]
          console.log (user)
          crypto.pbkdf2(password, user.salt, 310000, 64, 'sha256', function(err, hashedPassword){
            if (err) {return cb(err);}
            if (!crypto.timingSafeEqual(Buffer.from(user.password,'base64'), hashedPassword)) {
              return cb(null, false, { message: 'Incorrect username or password.' });
            }
            console.log(user)
            return cb(null, user);
          });
        });
      }));
      
      passport.serializeUser(function(user, cb) {
        process.nextTick(function() {
          cb(null, { id: user.id, username: user.username });
        });
      });
      
      passport.deserializeUser(function(user, cb) {
        process.nextTick(function() {
          return cb(null, user);
        });
      });

}


module.exports={
    Authenticate,
}