import { Server } from "socket.io";
import * as credentials from '../config/credentials.js';

export const connectSocket = (server) => {
    try {
        return new Server(server, {
            cors: {
              origin: credentials.WEB_URL,
              methods: ["GET", "POST"],
              credentials: true
            }
          });
    } catch (err) {
        console.log(err);
    }
};
