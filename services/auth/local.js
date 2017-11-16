const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const User = require('../../models/user');
const authHelpers = require('./auth-helpers');

const options = {};

init();

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    User.findByUserName(username)
      .then(user => {
        if (!user) {
          return done(null, false);
        }
        if (!authHelpers.comparePass(password, user.password_digest)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      }).catch(err => {
        console.log(err);
        return done(err);
      });
  })
);

authRouter.get('/verify', (req, res) => {
  if (req.user) return res.status(200).json({
    message: 'ok',
    auth: true,
    data: {
      user: req.user,
    }
  });
  else return res.status(400).json({
    message: 'Login failed',
    auth: false,
    data: {
      user: null,
    }
  });
});

module.exports = passport;
