import { Strategy } from "passport-local";
import bcrypt from "bcrypt";
import Admins from "../app/model/Admins.js";
import Users from '../app/model/Users.js';
import { TYPE_ADMIN } from "../config/constant.js";


// const LocalStrategy = Strategy();

// const User = require('../models/userMode');

const Local = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        let model = user.type == TYPE_ADMIN ? Admins : Users;
        model.findById(user._id, (err, user) => {
            done(err, user);
        });
    });

    /**
     * Admin Local Passport
     */
    passport.use(
        "admin-login",
        new Strategy({ usernameField: 'email' }, (email, password, done) => {

            Admins.findOne({ email: email })
                .then(user => {

                    if (!user) {
                        return done(null, false, { message: 'That email is not registerd' });
                    }

                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) {
                            throw err;
                        }

                        if (isMatch) {
                            return done(null, user)
                        } 
                        
                        return done(null, false, { message: 'Password incorrect' });
                    });
                })
                .catch(err => console.log(err))
        })
    );


    /**
     * User Local Passport
     */
    passport.use(
        "user-login",
        new Strategy({ usernameField: 'email' }, (email, password, done) => {
            
            Users.findOne({ email: email })
            .then(user => {
                
                if (!user) {
                    return done(null, false, { message: "That user is not registerd" });
                }
    
                bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
    
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: "Password incorrect" });
                }
                });
            })
            .catch(err => console.log(err));
        })
    );

}

export default Local;