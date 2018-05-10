const Schema = require('mongoose').Schema;
const { makePassword } = require('../common/utilities');
const validator = require('validator');

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },

  lastName: {
    type: String,
    required: [true, 'lastName is required']
  },

  password: {
    type: String,
    required: [true, 'password is required']
  },

  email: {
    type: String,
    unique: [true, 'email already in use'],
    required: [true, 'email is required'],
    validate: {
      validator: validator.isEmail,
      isAsync: false,
      message: 'email is invalid'
    }
  },
  created: {type: Date, default: Date.now}}
);


UserSchema.pre('save', function(next) {
  let user = this;
  makePassword(user.password).then(hash => {
    user.password = hash;
    next();
  }).catch(err => next());
});

UserSchema.pre('findOneAndUpdate', function(next) {
  let fieldsToUpdate = Object.keys(this._update['$set']);
  if(!fieldsToUpdate.includes('password')) {return next();}
  makePassword(this._update['$set'].password).then(hash => {
    this._update['$set'].password = hash;
    next();
  }).catch(err => next());
});

module.exports = {
  UserSchema: UserSchema
}
