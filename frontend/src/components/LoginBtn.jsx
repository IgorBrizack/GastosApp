import React from 'react';
import { useNavigate } from 'react-router-dom';
// import UserContext from '../contexts/UserContext';

function LoginBtn() {
  // const { email, password, valid } = useContext(UserContext);
  // const [user, setUser] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <button
        type="button"
        onClick={async () => navigate('/userscreen')}
        data-testid="common_login__button-login"
      >
        Login
      </button>
    </div>
  );
}

export default LoginBtn;
