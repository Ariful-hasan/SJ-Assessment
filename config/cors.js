import cors from 'cors';
import { WEB_URL } from './credentials.js';

const corsOptions = {
    "origin": true,
    "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
    // "allowedHeaders": "['Content-Type', 'Authorization']",
    // "preflightContinue": false,
    // "optionsSuccessStatus": 200
};

const CORS = cors(corsOptions);

export default CORS;
