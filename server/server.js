const express = require('express');
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/redux';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongo connect success');
});


const User = mongoose.model('user', new mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
}));

// User.create({
//     user: 'xiaohua',
//     age: 12
// }, function (err, doc) {
//     if (err) {
//         console.log(err);
//         return ;
//     } else {
//         console.log(doc);
//     }
// });
// User.remove({age: 18}, function (err, doc) {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(doc);
//     }
// });
// User.update({user: 'xiaoming'}, {'$set': {age: 26}}, function (err, doc) {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(doc);
//     }
// });



const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>')
});

app.get('/data', function (req, res) {
    User.findOne({user: 'xiaoming'}, function (err, doc) {
        if (err) {
            console.log(err);
            return; 
        } else {
            res.json(doc);
        }
    })
});

app.listen(9093, function () {
    console.log('Node app start at port 9093');
});