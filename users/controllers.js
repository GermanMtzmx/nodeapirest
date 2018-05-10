const { User } = require('./models');
const status = require('../common/statusCodes');

class UserController {

  list(req, res) {
    User.find({})
      .then(users => res.status(status.HTTP_200_OK).send(users))
      .catch(error => res.status(status.HTTP_400_BAD_REQUEST).send({error: error.message}));
  }

  create(req, res) {
    const newAccount = new User(req.body);
    newAccount.save()
      .then(data => res.status(status.HTTP_201_CREATED).send(data))
      .catch(error => res.status(status.HTTP_400_BAD_REQUEST).send({error: error.message}));
  }

  remove(req, res) {
    User.findByIdAndRemove({_id: req.params.id})
      .then(result => res.status(status.HTTP_204_NO_CONTENT).send())
      .catch(error => res.status(status.HTTP_400_BAD_REQUEST).send({error: error.message}));
  }

  update(req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body },  {new: true})
      .then(user => res.status(status.HTTP_200_OK).send(user))
      .catch(error => res.status(status.HTTP_400_BAD_REQUEST).send({error: error.message}));
  }
}

module.exports = {
  UserController,
}
