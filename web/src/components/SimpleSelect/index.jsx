import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

import ('./style.css');

const renderMenuItems = (item, index) => {
  return (
    <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
  )
}

const SimpleSelect = ({ data, name, value, onChange }) => {

    return (
        <FormControl className="form-control">
          <InputLabel htmlFor={name}>{name}</InputLabel>
          <Select
            value={value}
            onChange={onChange.bind(this)}
            inputProps={{
              name,
              id: name
            }}
          >
            {data.map(renderMenuItems)}
          </Select>
        </FormControl>
    );
}

SimpleSelect.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default SimpleSelect;
