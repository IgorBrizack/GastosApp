import React from 'react';
import PropTypes from 'prop-types';

function EmailInput({ setEmail }) {
  return (
    <label htmlFor="email" className="form-label">
      Email:
      <input
        data-testid="common_login__input-email"
        className="form-control"
        type="email"
        id="email"
        placeholder="exemplo@exemplo.com"
        onChange={(e) => setEmail(e.target.value)}
      />
    </label>
  );
}

export default EmailInput;

EmailInput.propTypes = {
  setEmail: PropTypes.func,
}.isRequired;
