import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hasUser, setHasUser] = useState(false);

  const contextUser = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    hasUser,
    setHasUser,
  }), [email, password, hasUser]);

  return (
    <UserContext.Provider value={contextUser}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
