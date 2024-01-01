var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
var connection = require('./Models/db');

async function Authenticate(){
    passport.use(new LocalStrategy(function verify(username, password, cb) {
        connection.query('SELECT * FROM USER WHERE USERNAME = ?', [ username ], function(err, row) {
          if (err) { return cb(err); }
          if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }
          crypto.pbkdf2(password, row[0].salt, 310000, 64, 'sha256', function(err, hashedPassword){
            console.log(hashedPassword)
            console.log(Buffer.from(hashedPassword.toString('hex')))

            if (err) {return cb(err);}
            if (!crypto.timingSafeEqual(row[0].PASSWORD, hashedPassword)) {
              return cb(null, false, { message: 'Incorrect username or password.' });
            }
            return cb(null, row);
          });
        });
      }));
}

module.exports={
    Authenticate,
}