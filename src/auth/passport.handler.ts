import passport from "passport";
import passportLocal from "passport-local";
import passportJwt from "passport-jwt";
import { User } from "../models/user.model";

const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const JWT_SECRET = 'ashdfjhasdlkjfhalksdjhflak';

passport.use(new LocalStrategy({ usernameField: "username", passwordField: 'password' }, (username, password, done) => {
    try {
        const user = User.findOne(username)
        if (!user) {
            return done(null, false, { message: 'User not found' })
        }

        const validate = User.isValidPassword(password);
        if (!validate) {
            return done(null, false, { message: 'Wrong password' })
        }

        return done(null, user, { message: 'Login successfull' })
    } catch (e) {
        return done(e)
    }
}));

passport.use(new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT_SECRET
    }, function (jwtToken, done) {
        const user = User.findOne(jwtToken.username)
        if (user && jwtToken.username === user!.username) {
            return done(undefined, user, jwtToken);
        } else {
            return done(undefined, false);
        }
    }));


