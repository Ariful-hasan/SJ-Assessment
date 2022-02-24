import bodyParser from 'body-parser';
import express from 'express';
import * as db from './config/database.js';
import CORS from './config/cors.js';
import router from './routes/webRoute.js';
import passport from 'passport';
import Local from './strategies/local.js';
import session from 'express-session';
import layout from 'express-ejs-layouts';
import flash from 'connect-flash-plus';
import { SUCCESS_MSG, FAILED_MSG, ERROR } from './config/constant.js';
import { handleError } from './config/errors.js';


const app = express();
Local(passport);


 /**
  * set views
  */
  app.use(layout);
  app.set('views', './views');
  app.set('view engine', 'ejs');


/**
 * middleware
 */
 app.use(express.static('public'));
 app.use(CORS);
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());


 /**
  * set session
  */
 app.use(session({
   key: 'email',
   secret: 'somerandonstuffs',
   resave: true,
   saveUninitialized: true,
   cookie: {
        expires: 600000
    }
 }));

 app.use(flash());

 /**
  * passport initialization
  */
 app.use(passport.initialize());
 app.use(passport.session());

 /**
 * *Global Variables
 */
app.use((req, res, next) => {
   res.locals.SUCCESS = req.flash(SUCCESS_MSG);
   res.locals.FAILED = req.flash(FAILED_MSG);
   res.locals.ERROR = req.flash(ERROR);
   next();
});

/**
 * router
 */
app.use('/', router);

/**
 * Prevent back button show
 * previous page after logout.
 */
app.use((req, res, next) => {
   res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
   next();
});

/**
 * default error handler
 */
app.use(handleError);

 /**
 * mongodb connection
 */
 db.connect_mongo();
//  db.set_mongo_dbug();


 export default app;