import { FAILED_MSG } from "./constant.js";

export const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash(FAILED_MSG, 'Please log in.');
    res.redirect('/login');
}

export const forwardAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/dashboard');
}