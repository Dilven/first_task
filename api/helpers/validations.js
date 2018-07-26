const Validator = require('validator');
const isEmpty = require('lodash/isEmpty')

module.exports = function({ nick, firstName, password, passwordConfirmation }) {
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