import React from 'react';
import PropTypes from 'prop-types';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
// funtional component => receives some props and returns html
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};
