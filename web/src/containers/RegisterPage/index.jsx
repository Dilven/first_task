import React, { Component } from 'react';
import RegisterForm from '../../components/RegisterForm';
import { connect } from 'react-redux';
import * as registrationAction from '../../actions/registration';
import * as flashMessagesAction from '../../actions/flashMessages';
import PropTypes from 'prop-types';

class RegisterPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      nick: '',
      password: '',
      passwordConfirmation: '',
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
    this.setState({ isLoading: true });
    const { nick, password, firstName, passwordConfirmation } = this.state;
    
    this.props.createUser(nick, firstName, password, passwordConfirmation)
      .then(response => response.json())
      .then(data => {
        if(data.isSuccess) {
          this.setState({ isLoading: false })
          this.props.history.push("/");
          const type = 'success';
          const text = 'You signed up successfully. Welcome!';
          this.props.displayFlashMessage(type, text)     
        } else {
          const type = 'error';
          const text = data.errors[0];
          this.props.displayFlashMessage(type, text);
          this.setState({ isLoading: false })
        }
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
      </div>
    )
  }
}

RegisterPage.propTypes = {
  createUser: PropTypes.func.isRequired,
  displayFlashMessage: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  return {
    ...state.register,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (nick, firstName, password, passwordConfirmation) => dispatch(registrationAction.createUser(nick, firstName, password, passwordConfirmation)),
    displayFlashMessage: (type, text) => dispatch(flashMessagesAction.displayFlashMessage(type, text))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)