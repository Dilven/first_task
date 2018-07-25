import React, { Component } from 'react';
import RegisterForm from '../../components/RegisterForm';
import { connect } from 'react-redux';
import * as registrationAction from '../../actions/registration';
import PropTypes from 'prop-types';
import ErrorSnackBar from '../../components/ErrorSnackbar';

class RegisterPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      nick: '',
      password: '',
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.id;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { nick, password, firstName } = this.state;
    this.props.createUser(nick, firstName, password);
  }

  render() {
    return (
      <div className="container">
        <RegisterForm
          firstName={this.state.firstName}
          nick={this.state.nick}
          password={this.state.password}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          isLoading={this.props.isLoading}
        />
        <ErrorSnackBar
          isError={this.state.isError}
        />
      </div>
    )
  }
}

RegisterPage.propTypes = {
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}
const mapStateToProps = (state) => {
  return {
    ...state.register,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (nick, firstName, password) => dispatch(registrationAction.createUser(nick, firstName, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)