import React, { useState, useEffect } from 'react';
import '../bootstrap.min.css';
import '../style.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

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
        gastosApp
      </h1>
      <p>{userName}</p>
      <div>
        <button
          className="btn btn-dark"
          type="button"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
