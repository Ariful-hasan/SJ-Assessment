import express from "express";
import passport from "passport";
import { forwardAuthenticated, ensureAuthenticated } from '../config/auth.js';
import isValidEmail from "../config/validator.js";
import LoginController from '../app/user/controllers/LoginController.js';
import DashboardController from '../app/user/controllers/DashboardController.js';
import MessageController from '../app/user/controllers/MessageController.js';

const router = express.Router();

/**
 * show login form
 */
 router.get('/login', forwardAuthenticated, LoginController.login);

 /**
  * login post form
  */
 router.post('/login', isValidEmail,
 passport.authenticate('user-login', { failureRedirect: '/login', failureFlash: true, failureMessage: true }),
 (req, res) => {
   res.redirect('/dashboard');
 });
 
 /**
  * admin logout
  */
 router.use('/logout', ensureAuthenticated, LoginController.logout);
 

 router.get('/dashboard', ensureAuthenticated, (req, res, next) => {(new DashboardController(req, res, next)).dashboard()});

 router.post('/messages', ensureAuthenticated, (req, res, next) => {(new MessageController(req, res, next)).getMessagesByUserId()});

export default router;