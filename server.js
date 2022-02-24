import http from 'http';
import app from './app.js';
import * as credentials from './config/credentials.js';
import { onServerError } from './config/errors.js';
import {connectSocket} from './socket/socketConnection.js';
import handleSocketEvent from './socket/socketEventHandling.js';

const server = http.createServer(app);

/**
 * socket.io initialize
 */
const io = connectSocket(server);
handleSocketEvent(io);

// io.on('connection', socket => { 
//     console.log('socketio connected');
//     app.set('socketio', socket);
// });
// app.set('socketio', io);

server.listen(credentials.PORT, () => { console.log('server listining on ' + credentials.PORT); });
server.on('error', onServerError);
