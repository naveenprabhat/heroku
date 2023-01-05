const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


const GOOGLE_CLIENT_ID = "1091340929678-0k8n425i7m6ift3nisjjjkrvggmga5qu.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const FACEBOOK_APP_ID = "831047228185708"
const FACEBOOK_APP_SECRET = "9d770e388a413c02e351f3cee549ad594c6ac2a3"

const GITHUB_CLIENT_ID = "ecec331d1f7726b46646"
const GITHUB_CLIENT_SECRET = "9d770e388a413c02e351f3cee549ad594c6ac2a3"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: "/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null, profile)
}
));

passport.use(new GithubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null, profile)
}
));

passport.serializeUser((user, done)=>{
    done(null, user)
})

passport.deserializeUser((user, done)=>{
    done(null, user)
})