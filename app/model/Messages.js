import mongoose from 'mongoose';
import {DEFAULT_SCHEMA_OPTION, ACTIVE, TYPE_ADMIN} from "../../config/constant.js";

const {Schema} = mongoose;

const messageSchema = new Schema({
    userId  : { type: String,  required: true },
    room    : { type: String,  required: true },
    name    : { type: String,  required: true },
    message : { type: String,  required: true },
    tstmp   : { type: Date, default: Date.now },
}, DEFAULT_SCHEMA_OPTION);

const Messages = mongoose.model('messages', messageSchema);
export default Messages;