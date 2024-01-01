var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
var connection = require('./Models/db');

async function Authenticate(){
    passport.authenticate('session')
    passport.use(new LocalStrategy(function verify(username, password, cb) {
        connection.query('SELECT * FROM USER WHERE USERNAME = ?', [ username ], function(err, row) {
          if (err) { return cb(err); }
          if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }
          crypto.pbkdf2(password, row[0].salt, 310000, 64, 'sha256', function(err, hashedPassword){
            if (err) {return cb(err);}
            if (!crypto.timingSafeEqual(Buffer.from(row[0].PASSWORD,'base64'), hashedPassword)) {
              return cb(null, false, { message: 'Incorrect username or password.' });
            }
            return cb(null, row);
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