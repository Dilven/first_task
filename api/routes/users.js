const bcrypt = require('bcrypt');
const isEmpty = require('lodash/isEmpty')

const User = require ('../models/user.js');
const commonValidations = require('../helpers/validations')

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);
  return User.where({ nick: data.nick }).fetch().then(user => {
    if(user) { errors.push("There is user with such nick")}
  })
  .then(() => {
    return {
      errors,
      isValid: isEmpty(errors)
    }
  })
}
module.exports = function (app) {
	app.post('/users', (req, res) => {
		// localhost:4000/products?page=0&phrase=Book&category=books&sort[type]=asc
    validateInput(req.body, commonValidations)
      .then(({ errors, isValid }) => {
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
	})
}
