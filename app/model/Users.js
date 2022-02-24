import mongoose from 'mongoose';
import {DEFAULT_SCHEMA_OPTION, ACTIVE, TYPE_ADMIN} from "../../config/constant.js";

const {Schema} = mongoose;

const userSchema = new Schema({
    name    : { type: String,  required: true },
    email   : { type: String,  required: true },
    password: { type: String,  required: true },
    status  : { type: String,  required: true, default: ACTIVE },
    type    : { type: String,  required: true, default: TYPE_ADMIN },
    isOnline: { type: Boolean, },
}, DEFAULT_SCHEMA_OPTION);

const Users = mongoose.model('users', userSchema);
export default Users;