const express = require('express');
const router = require('./src/routes/api');
const app = express();
const bodyParser = require('body-parser');


// Security middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitizer = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');



// Database
const mongoose = require('mongoose');




// Security middleware implements
app.use(cors())
app.use(helmet())
app.use(mongoSanitizer())
app.use(xssClean())
app.use(hpp())



// bodyParser
app.use(bodyParser.json())



// rate limiter
const limiter = rateLimit({ windowMs: 15 * 60 * 100, max: 3000 });


// Database Connection



// Frontend Tagging

    app.use(express.static('client/build'))
    app.get("*", function (req, res) {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })


// managing api routing
app.use("api/v1", router)

module.exports = app