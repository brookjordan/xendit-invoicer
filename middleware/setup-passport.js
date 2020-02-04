const passport = require("passport");
const LocalStrategy = require("passport-local");
const DB = require("../middleware/db.js");
const { testPassword } = require("../middleware/hash-password.js");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((userID, done) => {
  // TODO: Find out how to get the full user on signup
  DB.query("SELECT id,name,email from account WHERE id=$1", [
    userID,
  ])
  .then(data => {
    if (data.rows[0]) {
      done(null, data.rows[0]);
    } else {
      done({ id: userID });
    }
  })
  .catch(error => {
    done({ id: userID });
  });
});

passport.use(new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    let user;
    DB.query("SELECT id,password,name,email from account WHERE email=$1", [
      email,
    ])
    .then(data => {
      user = data.rows[0];
      let passwordHash = user.password;
      return testPassword(password, passwordHash);
    })
    .then(passwordIsCorrect => {
      if (passwordIsCorrect) {
        done(null, {
          id: user.id,
          name: user.name,
          email: user.email,
        });
      } else {
        throw new Error("Query failed");
      }
    })
    .catch(error => {
      done(null, false, { message: "Query failed" });
    });
  }
));
