const { UserSchema } = require('./schemas');
const db = require('../common/database');

const User = db.model('user', UserSchema);

module.exports = {
  User
}
