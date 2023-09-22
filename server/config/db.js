const mongoose = require('mongoose');

    mongoose.connect('mongodb://127.0.0.1:27017/my-blog').then(() => {
        console.log('Connected to mongoDB');
    }).catch((e) => {
        console.log('Failed to connect to mongoDB');
    })
// нужно подключить к серверу(после express)