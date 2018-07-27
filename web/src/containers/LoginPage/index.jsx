import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import { connect } from 'react-redux';
import * as flashMessagesAction from '../../actions/flashMessages';
import * as authAction from '../../actions/auth';
import PropTypes from 'prop-types';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nick: '',
      password: '',
      isLoading: false
    };
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.id;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const data = { 
      nick: this.state.nick,
      password: this.state.password
    }
    this.props.login(data)
      .then(data => {
        console.log(data)
        if(data.isSuccess) {
          this.setState({ isLoading: false })
          this.props.history.push("/");
          const type = 'success';
          const text = 'You signed in successfully. Welcome!';
          this.props.displayFlashMessage(type, text)
        } else {
          const type = 'error';
          const text = data.errors[0];
          this.props.displayFlashMessage(type, text);
          this.setState({ isLoading: false })
        }
      })
      .catch((data) => {
        const type = 'error';
        const text = 'Something wrong'
        this.props.displayFlashMessage(type, text);
        this.setState({ isLoading: false })
      })
  };

  render() {
    return (
      <div>
        <LoginForm 
          nick={this.state.nick}
          password={this.state.password}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  };
};

LoginPage.propTypes = {
  displayFlashMessage: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    displayFlashMessage: (type, text) => dispatch(flashMessagesAction.displayFlashMessage(type, text)),
    login: (data) => dispatch(authAction.login(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);