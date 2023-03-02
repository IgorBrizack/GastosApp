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
      <h1 style={{
        fontFamily: 'cursive',
        marginLeft: '10px',
      }}
      >
        GastosApp
      </h1>
      <p style={{
        fontSize: '20px',
        fontFamily: 'cursive',
      }}
      >
        {`Usuário: ${userName}`}
      </p>
      {isAdmin() ? (
        <div style={{
          display: 'flex',
          width: '500px',
          justifyContent: 'space-evenly',
        }}
        >
          <button
            style={{
              margin: '5px',
            }}
            className="btn btn-dark"
            type="button"
            onClick={() => onlyPorcentagens()}
          >
            Porcentagem Geral
          </button>
          <button
            style={{
              margin: '5px',
            }}
            className="btn btn-dark"
            type="button"
            onClick={() => onlyGastoMensal()}
          >
            Gasto Mensal
          </button>
          <button
            style={{
              margin: '5px',
            }}
            className="btn btn-dark"
            type="button"
            onClick={() => onlyUsersList()}
          >
            Usuários
          </button>
          <button
            style={{
              margin: '5px',
            }}
            className="btn btn-dark"
            type="button"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      ) : (
        <div style={{
          marginRight: '10px',
        }}
        >
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
