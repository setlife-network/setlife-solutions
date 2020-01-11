require('dotenv').config()
const express = require('express');
const path = require('path');
const fs = require('fs');
const moment = require('moment');

const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 5000;


app.use(express.static(__dirname + '/build'));

app.get('*', function (req, res, next) {
    // Prevents an HTML response for API calls
    if (req.path.indexOf('/api/') != -1) {
        return next();
    }

    fs.readFile(__dirname + '/build/index.html', 'utf8', function (err, text) {
        res.send(text);

    });
});

app.get('/api/getList', (req, res, next) => {
    const list = ["Lafathec1", "Lafatech2", "Lafatech3"];
    res.json(list);
    console.log('Sent list of items');
});

const cors = require('cors');

var whitelist = [
    'http://localhost:8080',
    'http://localhost:3000',
    'http://localhost:4000',
    'https://setlife.network',
    'https://info.setlife.network',
    'https://www.setlife.network',
    'https://setlife-website.herokuapp.com/'
];
var corsOptions = {
    origin: function(origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true,
    methods: ['GET,PUT,POST,DELETE,OPTIONS'],
    allowedHeaders: ['Access-Control-Allow-Headers', 'Origin', 'Access-Control-Allow-Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Cache-Control']
};
app.use(cors(corsOptions));


app.listen(port, function () {
    console.log('Lafatech-ReactWithApi: Server running on port ' + port);

});