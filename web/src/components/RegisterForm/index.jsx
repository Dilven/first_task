import React from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';



export default ({ firstName, nick, password, onChange, onSubmit }) => {
  return (
    <Card className="small-card container">
      <form onSubmit={onSubmit} className="form">
        <TextField
          id="firstName"
          label="First name"
          value={firstName}
          onChange={onChange}
          margin="normal"
        />
        <TextField
          id="nick"
          label="Nick"
          value={nick}
          onChange={onChange}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={onChange}
          margin="normal"
        />
        <Button type="submit" className="main-bar__btn" variant="contained" size="medium" color="primary">
          Sign up
        </Button>
      </form>
    </Card>
  )
}
