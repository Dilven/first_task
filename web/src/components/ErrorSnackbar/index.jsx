import React from 'react'
import PropTypes from 'prop-types';
import Snackbar from "@material-ui/core/Snackbar";



const ErrorSnackBar = ({ isError, errorMessages }) => {

  const renderError = (data) => {
    return (
      <span>{data}</span>
    )
  }
  return (
    <Snackbar
      open={errorMessages.length > 0}
      message={errorMessages.map(renderError)}
    />
  );
};

ErrorSnackBar.propTypes = {
  isError: PropTypes.bool.isRequired
}
export default ErrorSnackBar;