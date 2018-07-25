import React from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';


const RegisterForm = ({ firstName, nick, password, passwordConfirmation, onChange, onSubmit, isLoading }) => {
  return (
    <Card className="small-card container">
      <form onSubmit={onSubmit} className="form">
        <TextField
          id="firstName"
          label="First name"
          value={firstName}
          onChange={onChange}
          margin="normal"
          required
        />
        <TextField
          id="nick"
          label="Nick"
          value={nick}
          onChange={onChange}
          margin="normal"
          required
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={onChange}
          margin="normal"
          required
        />
        <TextField
          id="passwordConfirmation"
          label="Password confirmation"
          type="password"
          value={passwordConfirmation}
          onChange={onChange}
          margin="normal"
          required
        />
        <Button type="submit" className="main-bar__btn" variant="contained" size="medium" color="primary">
          Sign up
        </Button>
      </form>
    { isLoading && <LinearProgress /> }
    </Card>
  )
}

RegisterForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  nick: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default RegisterForm;