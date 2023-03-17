import React from 'react';
import './Filter.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => (
  <label className="filter_label">
    Find contacts by name
    <input
      value={value}
      onChange={onChangeFilter}
      type="text"
      className="filter_input"
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Filter;
