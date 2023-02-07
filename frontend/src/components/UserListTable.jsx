import React, { useEffect, useState } from 'react';
import { getData } from '../services/request';
import UserListTrComponent from './UserListTrComponent';
import '../style.css';

function UserListTable() {
  const [render, setRender] = useState(false);
  const [usersList, setUsersList] = useState([]);

  const usersData = async () => {
    const result = await getData('/users');
    setUsersList(result);
  };

  useEffect(() => {
    setUsersList([]);
    usersData();
  }, [render]);

  return (
    <div className="user-table-main-container">
      <table className="table">
        <tbody>
          {usersList.length > 0 && usersList.map((e) => (
            <UserListTrComponent key={e.email} userData={e} render={render} setRender={setRender} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserListTable;
