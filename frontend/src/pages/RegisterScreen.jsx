import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import EmailInput from '../components/EmailInput';
import GenericInput from '../components/GenericInput';
import { postData } from '../services/request';

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
    } catch (error) {
      setInvalidFields(true);
    }
  }

  return (
    <>
      <form>
        <label htmlFor="Input Name">
          Nome do Usúario:
          <input
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
          fieldName="Senha"
          placeholder="Min. 6 dígitos"
          setter={setRegisterPassword}
        />
      </form>
      { invalidFields && <p>dados inválidos</p> }
      <button
        type="button"
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
        type="button"
        onClick={() => navigate('/login')}
      >
        Tela de Login
      </button>
    </>
  );
}

export default RegisterScreen;
