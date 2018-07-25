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
      passwordConfirmation: '',
      errors: [],
      isLoading: false
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
    this.setState({ errors: [], isLoading: true });
    const { nick, password, firstName, passwordConfirmation } = this.state;
    
    this.props.createUser(nick, firstName, password, passwordConfirmation)
      .then(response => response.json())
      .then(data => {
        this.setState({errors: data, isLoading: false})
      })
    }

  render() {
    return (
      <div className="container">
        <RegisterForm
          firstName={this.state.firstName}
          nick={this.state.nick}
          password={this.state.password}
          passwordConfirmation={this.state.passwordConfirmation}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          isLoading={this.state.isLoading}
        />
        <ErrorSnackBar
          errorMessages={this.state.errors}
        />
      </div>
    )
  }
}

RegisterPage.propTypes = {
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  createUser: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  return {
    ...state.register,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (nick, firstName, password, passwordConfirmation) => dispatch(registrationAction.createUser(nick, firstName, password, passwordConfirmation))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)