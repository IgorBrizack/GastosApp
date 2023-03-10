import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { postData } from '../services/request';

function LoginBtn() {
  const navigate = useNavigate();

  const {
    email, password, setHasUser,
  } = useContext(UserContext);

  async function login(body) {
    try {
      const result = await postData('/login', body);
      localStorage.setItem('user', JSON.stringify(result));
      if (result.role === 'user') navigate('/user');
      if (result.role === 'admin') navigate('/admin');
      setHasUser(false);
    } catch (error) {
      setHasUser(true);
    }
  }

  return (
    <div>
      <button
        style={{
          width: '100%',
          marginBottom: '5px',
        }}
        className="btn btn-primary"
        type="button"
        onClick={() => login({ email, password })}
      >
        Login
      </button>
    </div>
  );
}

export default LoginBtn;
