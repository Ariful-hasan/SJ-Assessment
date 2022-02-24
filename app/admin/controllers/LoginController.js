import { SUCCESS } from "../../../config/constant.js";

class LoginController  {

    /**
     * show login page.
     */
    static login (req, res) {
        let data = {}
        data.pageTitle = "Admin Login";
        data.errors = [];
        res.render('./admin/login-form', {data: data});
    }

    static logout = (req, res) => {
        req.logout();
        req.flash(SUCCESS, 'You are logged out');
        return res.redirect('/admin/login');
    }

    //for test only
    static dashboard (req, res) {
        let data = {};
        data.user = req.user;
        data.pageTitle = "Dashboard";
        data.errors = [];
        res.render('./admin/dashboard', {data: data});
    }
}

export default LoginController;