import PropTypes from 'prop-types';
import React from 'react';

const Button = props => {
  // Here is a button for use when simply in need of a button that doesn't require to be wrapped in a form.
  // contains a click property for your use onClick
  return (
    <button
      onClick={props.handleClick}
      disabled={props.isDisabled}
      className={props.classType || 'primary'}
      style={props.style}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  classType: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  style: PropTypes.object,
};
