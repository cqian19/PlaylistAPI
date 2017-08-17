
import { APIManager } from './src/api/APIManager';
import { Error } from './src/api';
import { DOMAIN_TYPES, GET_TYPES } from './src/constants';

const express = require('express');
const logger = require('morgan');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');

const appPort = process.env.PORT || 8080;

const app = express();
const router = express.Router();

const limiter = new rateLimit({
    windowMs: 15*60*1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    delayMs: 0 // disable delaying - full speed until the max limit is reached
});

// Rate limit setup
app.use(limiter);

// view engine setup
app.set('view engine', 'html');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

router.get('/', function(req, res){
    res.json({ message: 'Playlist API' });
});


router.get('/:domain/:type', function(req, res) {
    console.log(req.params, req.query);
    const { domain, type } = req.params;
    const params = req.query;
    const response = APIManager.handleRequest(domain, type, params);
    if (response instanceof Error) {
        res.status(400).send({
            message: response.message,
        });
    } else if (response instanceof Promise) {
        response.then(function(response) {
            res.json(response.data);
        }, function(error) {
            res.status(500).send(error.message)
        });
    } else {
        res.json(response);
    }
});
app.listen(appPort);
app.use('/api', router);
console.log(`Listening on port ${appPort}`);