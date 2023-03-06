import React, { useContext, useEffect, useState } from 'react';
import PropTypes, { string } from 'prop-types';
import '../style.css';
import { deleteData, putData } from '../services/request';
import UserContext from '../contexts/UserContext';

const userStorage = JSON.parse(localStorage.getItem('user'));

function UserListTrComponent({ userData }) {
  const {
    hasUpdated,
    setHasUpdated,
  } = useContext(UserContext);

  const [username, setUserName] = useState();
  const [id, setUserId] = useState();
  const [email, setUserEmail] = useState();
  const [role, setUserRole] = useState();
  const [editar, setEditar] = useState(false);
  const [usernameUpdate, setUsernameUpdate] = useState();
  const [userEmailUpdate, setUserEmailUpdate] = useState();
  const [userRoleUpdate, setUserRoleUpdate] = useState();

  const roleHelper = {
    admin: 'ADM',
    user: 'Usuário',
  };

  const updateUser = async () => {
    const nameToUpdate = usernameUpdate || username;
    const emailToUpdate = userEmailUpdate || email;
    const roleToUpdate = userRoleUpdate || role;

    await putData(`/users/update/${id}`, {
      username: nameToUpdate,
      email: emailToUpdate,
      role: roleToUpdate,
    });
    setHasUpdated(!hasUpdated);
  };

  const deleteUser = async (userEmail) => {
    await deleteData(`/users/${userEmail}`);
    setHasUpdated(!hasUpdated);
  };

  useEffect(() => {
    setUserName(userData.username);
    setUserId(userData.id);
    setUserEmail(userData.email);
    setUserRole(roleHelper[userData.role]);
  }, [username, id, email, role]);

  return (
    <tr>
      <th>
        <p style={{ width: '50px' }}>{`ID: ${id}`}</p>
      </th>
      <th>
        <label style={{ width: '120px' }} htmlFor={userData.userName}>
          {editar ? (
            <div className="input-group input-group-sm">
              <input
                id={userData.userName}
                className="gastos-list-inputs"
                style={{
                  margin: 'auto',
                  width: '120px',
                }}
                type="text"
                placeholder="Nome"
                onChange={(e) => setUsernameUpdate(e.target.value)}
              />
            </div>
          ) : (
            <p
              style={{ margin: 'auto', textAlign: 'center', width: '120px' }}

            >
              {username}

            </p>
          )}
        </label>
      </th>
      <th>
        <label style={{ width: '150px' }} htmlFor={userData.userEmail}>
          {editar ? (
            <div className="input-group input-group-sm">
              <input
                id={userData.userEmail}
                className="gastos-list-inputs"
                style={{
                  margin: 'auto',
                  width: '120px',
                }}
                type="text"
                placeholder="Email"
                onChange={(e) => setUserEmailUpdate(e.target.value)}
              />
            </div>
          ) : (
            <p
              style={{ margin: 'auto', textAlign: 'center' }}
            >
              {email}
            </p>
          )}
        </label>
      </th>
      <th>
        <label style={{ width: '125px' }} htmlFor={userData.userRole}>
          {editar ? (
            <select
              id={userData.userRole}
              className="gastos-list-inputs form-select form-select-sm"
              style={{
                margin: 'auto',
                width: '100px',
              }}
              onClick={(e) => setUserRoleUpdate(e.target.value)}
              name="select"
            >
              {userStorage.email !== userData.email && (
                <option value="user">Usuário</option>
              )}
              <option value="admin">ADM</option>
            </select>
          ) : (
            <p
              style={{ margin: 'auto', textAlign: 'center' }}
            >
              {role}

            </p>
          )}
        </label>
      </th>
      <th>
        <button className="btn btn-primary btn-sm" type="button" onClick={() => setEditar(!editar)}>Editar</button>
      </th>
      <th>
        <button className="btn btn-warning btn-sm" type="button" onClick={() => updateUser()} disabled={!editar}>Salvar</button>
      </th>
      {userStorage.email !== userData.email && (
        <th>
          <button className="btn btn-danger btn-sm" type="button" onClick={() => deleteUser(email)}>Deletar</button>
        </th>
      )}
    </tr>
  );
}

UserListTrComponent.propTypes = {
  data: PropTypes.arrayOf(string),
}.isRequired;

export default UserListTrComponent;
