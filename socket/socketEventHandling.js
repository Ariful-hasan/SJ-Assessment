import Users from "../app/model/Users.js";

const handleSocketEvent = (io) => {
    /**
     * new connection
     */
    io.on('connection', socket => {
        console.log('socketio connected');

        socket.on("login", (data) => {
            Users.findByIdAndUpdate(data.id, {isOnline: true}, (err, docs)=>{});
            socket.broadcast.emit('new-user', data);
        });

        socket.on("logout", (data) => {
            Users.findByIdAndUpdate(data.id, {isOnline: false}, (err, docs)=>{});
            socket.broadcast.emit('user-loggedout', data);
        });

        socket.on("disconnect", () => {
            console.log("socket disconnected...."); // false
        });
    });
}

export default handleSocketEvent;
