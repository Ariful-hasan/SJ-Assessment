import mongoose from 'mongoose';
import {DEFAULT_SCHEMA_OPTION, ACTIVE, TYPE_ADMIN} from "../../config/constant.js";

const {Schema} = mongoose;

const adminSchema = new Schema({
    name    : { type: String, required: true },
    email   : { type: String, required: true },
    password: { type: String, required: true },
    status  : { type: String, required: true, default: ACTIVE },
    type    : { type: String, required: true, default: TYPE_ADMIN },
}, DEFAULT_SCHEMA_OPTION);

const Admins = mongoose.model('admin', adminSchema);
export default Admins;