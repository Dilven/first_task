import React from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ChangePasswordForm = ({ password, onChange, onSubmit, passwordConfirmation, newPassword }) => {
  return (
    <Card className="small-card container">
      <form onSubmit={onSubmit} className="form">
        <TextField
          id="password"
          label="Old password"
          type="password"
          value={password}
          onChange={onChange}
          margin="normal"
          required
        />
        <TextField
          id="newPassword"
          label="New Password"
          type="password"
          value={newPassword}
          onChange={onChange}
          margin="normal"
          required
        />
        <TextField
          id="passwordConfirmation"
          label="Confirm new password"
          type="password"
          value={passwordConfirmation}
          onChange={onChange}
          margin="normal"
          required
        />
        <Button type="submit" className="main-bar__btn" variant="contained" size="medium" color="primary">
          Change password
        </Button>
      </form>
    </Card>
  )
}

ChangePasswordForm.propTypes = {
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
export default ChangePasswordForm;