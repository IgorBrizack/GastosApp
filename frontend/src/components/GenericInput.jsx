import React from 'react';
import PropTypes from 'prop-types';

function GenericInput({
  type, selector, fieldName, placeholder, setter,
}) {
  return (
    <label htmlFor={selector}>
      { fieldName}
      <input
        data-testid="common_login__input-password"
        type={type}
        id={selector}
        className={selector}
        placeholder={placeholder}
        onChange={(e) => setter(e.target.value)}
      />
    </label>
  );
}

export default GenericInput;

GenericInput.propTypes = {
  type: PropTypes.string,
  selector: PropTypes.string,
  fieldName: PropTypes.string,
  placeholder: PropTypes.string,
  setter: PropTypes.func,
}.isRequired;
