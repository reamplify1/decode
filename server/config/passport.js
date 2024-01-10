const passport = require('passport')
const User = require('../auth/user')
const bcrypt = require('bcrypt')
const localStrategy = require('passport-local')

const GitHubStrategy = require('passport-github2')
// 2812442604ab9bd71174 client id
//3d73aba2ec47b82ef4634647f4429d5cd25439a4 secret key
 
passport.use(new localStrategy(
    {
        usernameField: 'email',

    },
    function(email, password, done){
        User.findOne({email}).then(user => {
            bcrypt.compare(password, user.password, function(err, result){
                if (err) {return done(err)}
                if (result) {
                    return done(null, user)
                } else {
                    return done(null, false, { message: 'Incorrect password' });
                }
            });
        }).catch(e => {
            return done(e)
        })
    }
))

passport.use(new GitHubStrategy({
    clientID: '2812442604ab9bd71174',
    clientSecret: '3d73aba2ec47b82ef4634647f4429d5cd25439a4',
    callbackURL: "http://localhost:8000/api/auth/github",
    scope: ['openid', 'email', 'profile'], //????
  },
  async function(accessToken, refreshToken, profile, done) {
    const user = await User.findOne({githubId: profile.id})
    console.log(profile);
    if(user){
        return done(null, user);
    } else {
    const newUser = await new User({
        githubId: profile.id,
        full_name: profile.displayName,
    }).save() 
    return done(null, newUser);
//     User.findOrCreate({ githubId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
  }
}));

passport.serializeUser(function(user, done){
    // console.log(user);
    done(null, user.id)
})

passport.deserializeUser(function(id, done){
    User.findById(id).then((user, err)  => {
        done(err, user);
    }).catch(err => {
        done(err, null);
    });
});