import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailInput from '../components/EmailInput';
import UserContext from '../contexts/UserContext';
import GenericInput from '../components/GenericInput';
import LoginBtn from '../components/LoginBtn';

function Login() {
  const {
    setEmail, setPassword, hasUser,
  } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const checkStorage = () => {
      if (!localStorage.getItem('user')) {
        return null;
      }
      const { role } = JSON.parse(localStorage.getItem('user'));
      if (role === 'user') navigate('/user');
      return null;
    };

    checkStorage();
  }, []);

  return (
    <>
      <h1>Bem vindo(a) ao gastosApp</h1>
      <form>
        <EmailInput setEmail={setEmail} />
        <GenericInput
          type="password"
          selector="password"
          fieldName="Senha"
          placeholder="Min. 6 dígitos"
          setter={setPassword}
        />
        <LoginBtn />
      </form>
      { hasUser && <p> usuário inválido ou senha inválido</p> }
      <button
        type="button"
        onClick={() => navigate('/register')}
      >
        Resgistrar

      </button>
    </>
  );
}

export default Login;
