import React, { useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import BarChart from '../components/BarChart';
import Data from '../Data';

ChartJS.register(...registerables);

function MainUserScreen() {
  const [userData] = useState({
    labels: Data.map((el) => el.year),
    datasets: [{
      label: 'Users Gained',
      data: Data.map((el) => el.userGain),
    }],
  });
  return (
    <BarChart chartData={userData} />
  );
}

export default MainUserScreen;
