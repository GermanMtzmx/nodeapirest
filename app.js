const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path')
const fs = require('fs')
const format = require('date-fns/format')

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// create log path if doesn't exist
if(!fs.existsSync('logs')){ fs.mkdirSync('logs') };
// write morgan logs
const accessLogStream = fs.createWriteStream(path.join(__dirname, `/logs/${format(new Date(),'DDMMYYYY')}_access.log` ), {flags: 'a'})

app.use(morgan('tiny',{stream: accessLogStream}));

app.use('/api/v1', require('./users/urls'));

app.listen(PORT, () => console.log(`Starting server in ${PORT} port`));
