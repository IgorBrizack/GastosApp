import React, { useEffect, useState } from 'react';
import { getData } from '../services/request';
import UserListTrComponent from './UserListTrComponent';
import '../style.css';

function UserListTable() {
  const [usersList, setUsersList] = useState([]);

  const usersData = async () => {
    const result = await getData('/users');
    setUsersList(result);
  };

  useEffect(() => {
    usersData();
  }, []);

  return (
    <div className="table-main-container">
      <table className="table">
        <tbody>
          {usersList.length > 0 && usersList.map((e) => (
            <UserListTrComponent userData={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserListTable;
