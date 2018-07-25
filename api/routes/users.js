const Validator = require('validator');
const isEmpty = require('lodash/isEmpty')

module.exports = function (app) {
  const validateInput = ({ nick, firstName, password, passwordConfirmation }) => {
    let errors = [] ;

    console.log(passwordConfirmation);

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
    if (!isValid) {
      res.status(400).send(errors);
    }
	})
}
