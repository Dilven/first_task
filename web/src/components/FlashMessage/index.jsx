import React from 'react'
import PropTypes from 'prop-types';
import Snackbar from "@material-ui/core/Snackbar";
import { connect } from 'react-redux';

const FlashMessage = (props) => {
  const text = !props.message[0] ? '' : props.message[0].text
  console.log(text)
  return (
    <Snackbar
      open={props.message.length > 0}
      message={text}
    />
  );
};

FlashMessage.propTypes = {
  message : PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    message: state.flashMessages,
  }
}
export default connect(mapStateToProps)(FlashMessage);