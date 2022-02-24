import * as EmailValidator from 'email-validator';
import { FAILED_MSG } from './constant.js';

const isValidEmail = (req, res, next) => {
    if (EmailValidator.validate(req.body.email)) {
        return next();
    }

    req.flash(FAILED_MSG, 'Invalid email address.');
    res.redirect('/login');
}

export default isValidEmail;