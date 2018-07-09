import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import ('./style.css');

const FreeTextSearch = ({ onChange, value, name }) => {
  return (
      <TextField
        id="search"
        label="Search field"
        type="search"
        className="input"
        margin="normal"
        name={name}
        value={value}
        onChange={onChange.bind(this, name)}
      />
  );
};

FreeTextSearch.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default FreeTextSearch;
