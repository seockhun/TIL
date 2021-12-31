const mongoose = require('mongoose');

const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }
    mongoose.connect('mongodb://seockhun:root@localhost:27017/admin', {
        dbName: 'nodejs',
    }, (error) => {
        if (error) {
            console.log('mongodb connect error', error);
        } else {
            console.log('mongodb connect success');
        }
    });
};

mongoose.connection.on('error', (error) => {
    console.error('connect error', error);
});

mongoose.connection.on('disconnected', () => {
    console.error("connect stopped. try to reconnect");
    connect();
})

module.exports = connect;