import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export default function(ComposedComponent) {
  class Authenticate extends Component {
    
    componentWillMount() {
      if(!this.props.isAuthenticated) {
        console.log('musisz sie zalogowa');
        this.props.history.push("/login");
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.isAuthenticated) {
        this.props.history.push("/");
      }
    }
    render() {
      return (
        <ComposedComponent {...this.props}/>
      )
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    }
  }
  return connect(mapStateToProps)(Authenticate);
}

