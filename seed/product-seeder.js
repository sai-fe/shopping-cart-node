var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products =  [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/9/91/WoW_Box_Art1.jpg',
        title: 'World of Warcraft Video Game',
        description: 'Adventure Game!!',
        price: 15
    }),
    new Product({
        imagePath: 'http://images.pushsquare.com/games/ps4/call_of_duty_black_ops_iii/cover_large.jpg',
        title: 'Call of Duty Video Game',
        description: 'Shooting Game!!',
        price: 20
    }),
    new Product({
        imagePath: 'http://static.giantbomb.com/uploads/original/12/125319/2601413-1323159244-Dark-.jpg',
        title: 'Darksoul Video Game',
        description: 'Another Adventure Game!!',
        price: 50
    }),
    new Product({
        imagePath: 'http://ocremix.org/files/images/games/ps2/2/god-of-war-ii-ps2-cover-front-eu-49297.jpg',
        title: 'God of War Video Game',
        description: 'Ultimate Game!!',
        price: 60
    })
];

var done = 0;
for(var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

