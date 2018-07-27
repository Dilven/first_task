import React, { Component } from 'react';
import ChangePasswordForm from '../../components/ChangePasswordForm'

class ProfileSettingsPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordConfirmation: '',
      newPassword: '',
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.id;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console('foo')
  }
  render() {
    return (
      <ChangePasswordForm
        password={this.state.password}
        passwordConfirmation={this.state.passwordConfirmation}
        newPassword={this.state.newPassword}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    )
  }
}

export default ProfileSettingsPage;
