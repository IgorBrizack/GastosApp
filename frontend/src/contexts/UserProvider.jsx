import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hasUser, setHasUser] = useState(false);
  const [registerEmail, setRegisterEmail] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [registerUserName, setRegisterUserName] = useState();
  const [gastoList, setGastoList] = useState([]);
  const [hasUpdated, setHasUpdated] = useState(true);
  const [adminPorcentagens, setAdminPorcentagens] = useState(true);
  const [gastoMensal, setGastoMensal] = useState(false);
  const [usersList, setUsersList] = useState(false);

  const contextUser = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    hasUser,
    setHasUser,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerUserName,
    setRegisterUserName,
    gastoList,
    setGastoList,
    hasUpdated,
    setHasUpdated,
    adminPorcentagens,
    setAdminPorcentagens,
    gastoMensal,
    setGastoMensal,
    usersList,
    setUsersList,
  }), [
    email,
    password,
    hasUser,
    registerEmail,
    registerPassword,
    registerUserName,
    gastoList,
    hasUpdated,
    adminPorcentagens,
    gastoMensal,
    usersList,
  ]);

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
