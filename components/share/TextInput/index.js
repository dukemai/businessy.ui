import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const TextInput = props => <input type="text" {...props} />;
TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;
export default TextInput;
