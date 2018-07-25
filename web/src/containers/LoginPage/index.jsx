import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm'
import PropTypes from 'prop-types';

export default class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nick: '',
      password: '',
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
    console.log('wyslano')
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
