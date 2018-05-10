const bcrypt = require('bcrypt');
const { saltRoundsEncription } = require('./settings');

const isEncrypted = (password='',roundsEncryption=10) => {
  let startsWith = password.startsWith(`$2b$${roundsEncryption}`);
  return (startsWith && password.length === 60) ? true : false;
}

const makePassword = async (password) => {
  let alreadyCrypted = isEncrypted(password,saltRoundsEncription);
  if (!alreadyCrypted){
    return  bcrypt.hash(password,saltRoundsEncription).then(hash => hash).catch(
      err => {console.error('crypt error');}
    );
  }
  return password;
}





module.exports = {
  makePassword,
}
