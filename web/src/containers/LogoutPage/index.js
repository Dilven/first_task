import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authAction from '../../actions/auth';

class LogoutPage extends Component {

  componentDidMount() {
    this.props.logout();
  }
  render() {
    return (
      <div>
        WYLOGOWANO!
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(authAction.logout())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);