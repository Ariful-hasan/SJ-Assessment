import * as db from './credentials.js';
import mongoose from 'mongoose';

export const connect_mongo = () => {
    mongoose.connect(db.MONGO_KEY, {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false
    })
    .then (client => {
        if (client) {
            console.log('mongo successfully connected!!');
        } else {
            console.log('mongo not connected!!');
        }
    })
    .catch(err => {
        console.log('Mongo Has Exceptons : ');
        console.error(err);
    });
};

export const set_mongo_dbug = () => {
    mongoose.set('debug', true);
}
