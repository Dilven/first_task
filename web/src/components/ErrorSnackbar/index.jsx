import React from 'react'
import PropTypes from 'prop-types';
import Snackbar from "@material-ui/core/Snackbar";



const ErrorSnackBar = ({ isError }) => {
  console.log(isError)
  return (
    <Snackbar
      open={true}
      message="This is an error message!"
    />
  );
};

ErrorSnackBar.propTypes = {
  isError: PropTypes.bool.isRequired
}
export default ErrorSnackBar;