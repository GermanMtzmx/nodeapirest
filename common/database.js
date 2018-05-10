const settings = require('./settings');
const db = require('mongoose');
db.connect(settings.database);
module.exports = db;
