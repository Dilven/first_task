const Validator = require('validator');
const isEmpty = require('lodash/isEmpty')
const bcrypt = require('bcrypt');

const User = require ('../models/user.js');
module.exports = function (app) {
  const validateInput = ({ nick, firstName, password, passwordConfirmation }) => {
    const errors = [] ;

    if (Validator.isEmpty(nick)) {
      errors.push('Nick is required');
    };
    if (Validator.isEmpty(firstName)) {
      errors.push('Name is required');
    };
    if (Validator.isEmpty(password)) {
      errors.push('Password is required');
    };
    if (Validator.isEmpty(passwordConfirmation)) {
      errors.push('Password confirmation is required');
    };
    if(!Validator.equals(password, passwordConfirmation)) {
      errors.push("Passwords must match");
    };

    return {
      errors,
      isValid: isEmpty(errors)
    }
  }
	app.post('/users', (req, res) => {
		// localhost:4000/products?page=0&phrase=Book&category=books&sort[type]=asc
    const { errors, isValid } = validateInput(req.body);
    if (isValid) {
      const { nick, firstName, password } = req.body;
      const password_digest = bcrypt.hashSync(password, 10);
      User.forge({
        nick, name:firstName, password:password_digest
      }).save()
        .then(user => {
            res.json({ isSuccess: true })
          })
        .catch(err => {
          console.log('fooo')

          res.status(500).json({ isSuccess: false, errors: [err.detail]})
        })
    } else {
      res.status(400).send({ isSuccess: false, errors });
    }
	})
}
