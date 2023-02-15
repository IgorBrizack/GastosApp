import React, { useState, useEffect, useContext } from 'react';
import '../bootstrap.min.css';
import '../style.css';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

function Header() {
  const navigate = useNavigate();
  const {
    setAdminPorcentagens,
    setGastoMensal,
    setUsersList,
    setHasUpdated,
    hasUpdated,
  } = useContext(UserContext);
  const [userName, setUserName] = useState('');

  const onlyPorcentagens = () => {
    setGastoMensal(false);
    setUsersList(false);
    setAdminPorcentagens(true);
    setHasUpdated(!hasUpdated);
  };

  const onlyGastoMensal = () => {
    setAdminPorcentagens(false);
    setUsersList(false);
    setGastoMensal(true);
    setHasUpdated(!hasUpdated);
  };

  const onlyUsersList = () => {
    setAdminPorcentagens(false);
    setGastoMensal(false);
    setUsersList(true);
    setHasUpdated(!hasUpdated);
  };

  const isAdmin = () => {
    const { role } = JSON.parse(localStorage.getItem('user'));
    if (role === 'admin') return true;
    return false;
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    const getUserName = () => {
      const { username } = JSON.parse(localStorage.getItem('user'));
      setUserName(username);
    };
    getUserName();
  });

  return (
    <div className="header-main-container">
      <h1>
        MeusGastos.com
      </h1>
      <p>{userName}</p>
      {isAdmin() ? (
        <div style={{
          display: 'flex',
          width: '500px',
          justifyContent: 'space-evenly',
        }}
        >
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => onlyPorcentagens()}
          >
            Porcentagem Geral
          </button>
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => onlyGastoMensal()}
          >
            Gasto Mensal
          </button>
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => onlyUsersList()}
          >
            Usuários
          </button>
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
