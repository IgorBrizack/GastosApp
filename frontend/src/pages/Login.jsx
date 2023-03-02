import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailInput from '../components/EmailInput';
import UserContext from '../contexts/UserContext';
import GenericInput from '../components/GenericInput';
import LoginBtn from '../components/LoginBtn';
import Footer from '../components/Footer';

function Login() {
  const {
    setEmail, setPassword, hasUser, setHasUser,
  } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const checkStorage = () => {
      if (!localStorage.getItem('user')) {
        return null;
      }
      const { role } = JSON.parse(localStorage.getItem('user'));
      if (role === 'user') navigate('/user');
      if (role === 'admin') navigate('/admin');
      return null;
    };

    checkStorage();
  }, []);

  useEffect(() => {
    setHasUser(false);
  }, []);

  return (
    <>
      <div className="login-main-container">
        <div>
          <h1 className="banner-text">Bem vindo(a) ao gastosApp</h1>
        </div>
        <div>
          <form>
            <div className="mb-3">
              <EmailInput setEmail={setEmail} />
              <GenericInput
                type="password"
                selector="password"
                fieldName="Senha:"
                placeholder="Min. 6 dígitos"
                setter={setPassword}
              />
            </div>
            <div className="buttons-login-container">
              <LoginBtn />
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => navigate('/register')}
              >
                Resgistrar

              </button>
            </div>
          </form>
          { hasUser && (
          <p style={{
            color: 'red',
          }}
          >
            Usuário ou Senha Inválido
          </p>
          ) }
        </div>
      </div>
      <Footer />
    </>

  );
}

export default Login;
