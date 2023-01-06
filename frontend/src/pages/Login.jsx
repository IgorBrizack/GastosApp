import React, { useContext } from 'react';
import EmailInput from '../components/EmailInput';
import UserContext from '../contexts/UserContext';
import GenericInput from '../components/GenericInput';
import LoginBtn from '../components/LoginBtn';

function Login() {
  const {
    setEmail, setPassword,
  } = useContext(UserContext);
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
    </>
  );
}

export default Login;
