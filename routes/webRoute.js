import express from "express";
import userRoute from './userRoute.js';
import adminRoute from './adminRoute.js';

const router = express.Router();

/**
 * admin router.
 */
router.use('/admin/', adminRoute);

/**
 * user router.
 */
router.use('/', userRoute);

/**
 * 404 not found router.
 */
 router.use('/', (req, res)=> {
    res.status(404).send("Page Not Found");
});

export default router;