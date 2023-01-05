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
  );
}

export default Login;
