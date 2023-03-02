import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import EmailInput from '../components/EmailInput';
import GenericInput from '../components/GenericInput';
import { postData } from '../services/request';
import Footer from '../components/Footer';

function RegisterScreen() {
  const navigate = useNavigate();
  const {
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerUserName,
    setRegisterUserName,
  } = useContext(UserContext);

  const [invalidFields, setInvalidFields] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  async function register(body) {
    try {
      await postData('/register', body);
      setUserCreated(true);
      setInvalidFields(false);
    } catch (error) {
      alert(error);
      setInvalidFields(true);
    }
  }

  return (
    <>

      <div className="register-screen-main-container">
        <div>
          <h1 className="banner-text">Crie seu cadastro</h1>
        </div>
        <form>
          <label htmlFor="Input Name" className="form-label">
            Nome do Usúario:
            <input
              className="form-control"
              type="text"
              id="Input Name"
              placeholder="Nome do usúario"
              onChange={(e) => setRegisterUserName(e.target.value)}
            />
          </label>
          <EmailInput setEmail={setRegisterEmail} />
          <GenericInput
            type="password"
            selector="password"
            fieldName="Senha:"
            placeholder="Min. 6 dígitos"
            setter={setRegisterPassword}
          />
        </form>
        { invalidFields && <p style={{ textAlign: 'center', color: 'red' }}>Dados inválidos</p> }
        <button
          style={{
            marginBottom: '5px',
          }}
          type="button"
          className="btn btn-primary"
          onClick={() => register({
            username: registerUserName,
            password: registerPassword,
            email: registerEmail,
            role: 'user',
          })}
        >
          Registrar usúario

        </button>
        {userCreated && <p>Usúario criado com sucesso!</p>}
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => navigate('/login')}
        >
          Tela de Login
        </button>
      </div>
      <Footer />
    </>
  );
}

export default RegisterScreen;
