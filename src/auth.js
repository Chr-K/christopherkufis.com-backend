var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');
var connection = require('./Models/db').connectionPool;

async function Authenticate(){
    passport.use(new LocalStrategy(function verify(username, password, cb) {
        connection.query('SELECT * FROM USER WHERE username = ?', [ username ], function(err, row) {
          if (err) { return cb(err); }
          if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }
          const user = row[0]
          crypto.pbkdf2(password, user.salt, 310000, 64, 'sha256', function(err, hashedPassword){
            if (err) {return cb(err);}
            if (!crypto.timingSafeEqual(Buffer.from(user.password,'base64'), hashedPassword)) {
              return cb(null, false, { message: 'Incorrect username or password.' });
            }
            return cb(null, user);
          });
        });
      }));
      console.log('hi')
      passport.serializeUser(function(user,done){
        console.log(user.id);

        done(null,user.id)
      })

      passport.deserializeUser(function(id, cb){
        connection.query('SELECT * FROM users WHERE id = ?', [ id ], function(err, user) {
        if (err) { return cb(err); }
        return cb(null, user);
        });
      });

}


module.exports={
    Authenticate,
}