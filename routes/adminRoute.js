import express from "express";
import passport from "passport";
import LoginController from '../app/admin/controllers/LoginController.js';
import DashboardController from '../app/admin/controllers/DashboardController.js';
import { forwardAuthenticated, ensureAuthenticated } from '../config/auth.js';
import isValidEmail from "../config/validator.js";


const router = express.Router();

/**
 * show login form
 */
router.get('/login', forwardAuthenticated, LoginController.login);

/**
 * login post form
 */
router.post('/login', isValidEmail,
passport.authenticate('admin-login', { failureRedirect: '/admin/login', failureFlash: true, failureMessage: true }),
(req, res) => {
  res.redirect('/admin/dashboard');
});

/**
 * admin logout
 */
router.use('/logout', ensureAuthenticated, LoginController.logout);

//for test
router.get('/dashboard', ensureAuthenticated, DashboardController.dashboard);

export default router;