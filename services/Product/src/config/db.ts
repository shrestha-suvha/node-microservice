import mongoose from 'mongoose';
import config from './env';

export const connect = () => {
    mongoose.connect(config.dbUrl);
    mongoose.set('toJSON', {
        virtuals: true,
        transform: (doc, converted) => {
            delete converted._id;
        },
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error: '));
    db.once('open', function () {
        console.log('Connected successfully');
    });
};
