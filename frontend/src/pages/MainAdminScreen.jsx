import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import PieChart from '../components/PieChart';
import PorcentagensComponent from '../components/Porcentagens';
import UserListTable from '../components/UserListTable';
import UserContext from '../contexts/UserContext';
import { getData } from '../services/request';
import BarChart from '../components/BarChart';
import Footer from '../components/Footer';

function MainAdminScreen() {
  const {
    setUserGastoData,
    hasUpdated,
    usersList,
    gastoMensal,
    adminPorcentagens,
  } = useContext(UserContext);

  const getAllData = async () => {
    try {
      const data = await getData('/gasto');
      return setUserGastoData(data);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    getAllData();
  }, [hasUpdated]);
  return (
    <>
      <Header />
      <div id="user-screen-main-container">
        {adminPorcentagens && (
          <div className="pie-and-percentage-main-container">
            <div
              className="pie-chart-from-users"
            >
              <PieChart />
            </div>
            <PorcentagensComponent />
          </div>
        )}
        { usersList && <UserListTable /> }
        {gastoMensal && <BarChart />}
      </div>
      <Footer />
    </>
  );
}

export default MainAdminScreen;
