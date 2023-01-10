import React, { useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import PieChart from '../components/PieChart';
import Data from '../Data';
import '../style.css';
import Header from '../components/Header';

ChartJS.register(...registerables);

function MainUserScreen() {
  const [selectedType, setSelectedType] = useState('alimentacao');
  const [userData] = useState({
    labels: Data.map((el) => el.type),
    datasets: [{
      label: 'Waste',
      data: Data.map((el) => el.wasted),
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(70, 158, 94)',
        'rgb(114, 70, 158)',
      ],
      hoverOffset: 4,
    }],
  });

  return (
    <>
      <Header />
      <p>{selectedType}</p>
      <div
        className="pie-chart-from-users"
      >
        <PieChart chartData={userData} />
      </div>
      <h2>Inserir novo gasto</h2>
      <label htmlFor="dinheiro">
        R$
        <input id="dinheiro" type="number" step="0.01" name="quantity" min="0.01" />
      </label>
      <label htmlFor="dinheiro">
        Tipo:
        <select onChange={(e) => setSelectedType(e.target.value)} name="select">
          <option value="alimentacao" selected>Alimentação</option>
          <option value="servico">Serviços</option>
          <option value="investimento">Investimentos</option>
          <option value="lazer">Lazer</option>
          <option value="educacao">Educação</option>
        </select>
      </label>
      <button
        type="button"
      >
        Inserir

      </button>
      {/* <div>
        <h2>Porcentagens</h2>
        <p>comida x%</p>
        <p>serviços x%</p>
        <p>lazer x%</p>
        <p>Investimento x%</p>
      </div> */}
    </>
  );
}

export default MainUserScreen;
