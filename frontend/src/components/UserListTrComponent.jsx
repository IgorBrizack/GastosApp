import React, { useEffect, useState } from 'react';
import PropTypes, { string } from 'prop-types';
import '../style.css';

function UserListTrComponent({ userData }) {
  const [userName, setUserName] = useState();
  const [id, setUserId] = useState();
  const [email, setUserEmail] = useState();
  const [role, setUserRole] = useState();
  const [editar, setEditar] = useState(false);

  const roleHelper = {
    admin: 'ADM',
    user: 'Usuário',
  };

  useEffect(() => {
    setUserName(userData.username);
    setUserId(userData.id);
    setUserEmail(userData.email);
    setUserRole(roleHelper[userData.role]);
  }, [userName, id, email, role]);
  return (
    <tr>
      <th>
        <p>{`ID: ${id}`}</p>
      </th>
      {editar ? (
        <th>
          <label style={{ display: 'flex' }} htmlFor={userData.userName}>
            <div className="input-group input-group-sm">
              <input
                id={userData.userName}
                className="gastos-list-inputs"
                type="text"
                placeholder={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </label>
        </th>
      ) : (
        <th className="gastos-list-inputs">
          <p>{userName}</p>
        </th>
      )}
      {editar ? (
        <div className="input-group input-group-sm">
          <input
            style={{
              width: '50px',
            }}
            className="gastos-list-inputs"
            type="text"
            placeholder={email}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      ) : (
        <th className="gastos-list-inputs">
          <p>{email}</p>
        </th>
      )}
      {editar ? (
        <select
          className="gastos-list-inputs form-select form-select-sm"
          onClick={(e) => setUserRole(e.target.value)}
          name="select"
        >
          <option value="user">Usuário</option>
          <option value="admin">ADM</option>
        </select>
      ) : (
        <th>
          <p>{role}</p>
        </th>
      )}
      <th>
        <button className="btn btn-primary btn-sm" type="button" onClick={() => setEditar(!editar)}>Editar</button>
      </th>
      <th>
        <button className="btn btn-warning btn-sm" type="button" disabled>Salvar</button>
      </th>
      <th>
        <button className="btn btn-danger btn-sm" type="button">Deletar</button>
      </th>
    </tr>
  );
}

UserListTrComponent.propTypes = {
  data: PropTypes.arrayOf(string),
}.isRequired;

export default UserListTrComponent;
