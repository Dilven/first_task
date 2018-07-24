import React from 'react'
import PropTypes from 'prop-types';
import Snackbar from "@material-ui/core/Snackbar";



const ErrorSnackBar = ({ isError }) => {
  return (
    <Snackbar
      open={isError}
      message="This is an error message!"
    />
  );
};

ErrorSnackBar.propTypes = {
  isError: PropTypes.bool.isRequired
}
export default ErrorSnackBar;