import { SUCCESS } from "../../../config/constant.js";

class LoginController {

    /**
     * show login page.
     */
    static login (req, res) {
        let data = {}
        data.pageTitle = "User Login";
        data.errors = [];
        res.render('./user/login-form', {data: data});
    }

    static logout = (req, res) => {
        req.logout();
        req.flash(SUCCESS, 'You are logged out');
        res.redirect('/login');
    }
}

export default LoginController;