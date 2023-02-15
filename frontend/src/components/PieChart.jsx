import React, { useContext, useEffect, useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import loading from '../images/loading.gif';
import UserContext from '../contexts/UserContext';

ChartJS.register(...registerables);

function PieChart() {
  const {
    userGastoData,
  } = useContext(UserContext);
  const [chartData, setChartData] = useState(false);

  const formatedData = (data) => {
    const labels = {
      alimentacao: 'Alimentação',
      servico: 'Serviço',
      investimento: 'Investimento',
      lazer: 'Lazer',
      educacao: 'Educação',
    };

    const formated = data.reduce((acc, el, index) => {
      const { type, value } = el;
      acc.push({ type: labels[type], value, id: index + 1 });
      return acc;
    }, []);

    return setChartData({
      labels: formated.map((el) => el.type),
      datasets: [{
        label: 'All data',
        data: formated.map((el) => Number(el.value)),
        backgroundColor: [
          'rgb(50,205,50)',
          'rgb(64,224,208)',
          'rgb(128,0,128)',
          'rgb(131,111,255)',
          'rgb(218,165,32)',
        ],
        hoverOffset: 4,
      }],
    });
  };

  useEffect(() => {
    formatedData(userGastoData);
  }, [userGastoData]);

  return (
    <div style={
      {
        padding: '20px',
      }
    }
    >
      {
      chartData ? (<Pie data={chartData} />) : (<img alt="loading" src={loading} />)
    }
    </div>
  );
}

export default PieChart;
