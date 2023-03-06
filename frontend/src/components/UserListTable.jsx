import React, { useContext, useEffect } from 'react';
import { getData } from '../services/request';
import UserListTrComponent from './UserListTrComponent';
import '../style.css';
import UserContext from '../contexts/UserContext';

function UserListTable() {
  const {
    setUsersListData,
    hasUpdated,
    usersListData,
    usersList,
  } = useContext(UserContext);

  const usersData = async () => {
    const result = await getData('/users');
    setUsersListData(result);
  };

  useEffect(() => {
    // setUsersList([]);
    usersData();
  }, [hasUpdated]);

  return (
    <div className="user-table-main-container">
      <table className="table">
        <tbody>
          {usersList && usersListData.map((e) => (
            <UserListTrComponent key={e.email} userData={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserListTable;
