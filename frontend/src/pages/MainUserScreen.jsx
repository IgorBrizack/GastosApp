import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import PieChart from '../components/PieChart';
import '../style.css';
import Header from '../components/Header';
import { getData, postData } from '../services/request';

ChartJS.register(...registerables);

function MainUserScreen() {
  const [selectedType, setSelectedType] = useState('alimentacao');
  const [date, setDate] = useState();
  const [valueGasto, setValueGasto] = useState('0');
  const [allData, setAllData] = useState();
  const [render, setRender] = useState(true);

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
      if (acc.some((element) => element.type === labels[el.type])) {
        const accFiltered = acc.filter((element) => element.type !== labels[el.type]);
        const [accFilteredOld] = acc.filter((element) => element.type === labels[el.type]);
        const newElement = {
          type: labels[type],
          value: Number(accFilteredOld.value) + Number(value),
          id: accFilteredOld.id,
        };
        return [...accFiltered, newElement];
      }
      acc.push({ type: labels[type], value, id: index + 1 });
      return acc;
    }, []);

    return setAllData({
      labels: formated.map((el) => el.type),
      datasets: [{
        label: 'All data',
        data: formated.map((el) => el.value),
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
  };

  const getAllData = async () => {
    const { email } = JSON.parse(localStorage.getItem('user'));
    try {
      const data = await getData(`/gasto/${email}`);
      return formatedData(data);
    } catch (error) {
      return error.message;
    }
  };

  const insertGasto = async () => {
    const { email } = JSON.parse(localStorage.getItem('user'));
    try {
      await postData('/gasto', {
        email, value: Number(valueGasto), type: selectedType, date: date.replaceAll('-', '/'),
      });
      return setRender(!render);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    getAllData();
  }, [render]);

  return (
    <>
      <Header />
      <div
        className="pie-chart-from-users"
      >
        {allData && (<PieChart chartData={allData} />)}

      </div>
      <h2>Inserir novo gasto</h2>
      <label htmlFor="dinheiro">
        R$
        <input
          onChange={(e) => setValueGasto(e.target.value)}
          id="dinheiro"
          type="number"
          step="0.01"
          name="quantity"
          min="0.01"
        />
      </label>
      <label htmlFor="dinheiro">
        Tipo:
        <select onChange={(e) => setSelectedType(e.target.value)} name="select">
          <option value="alimentacao">Alimentação</option>
          <option value="servico">Serviços</option>
          <option value="investimento">Investimentos</option>
          <option value="lazer">Lazer</option>
          <option value="educacao">Educação</option>
        </select>
      </label>
      <label htmlFor="insert-date-input">
        Data:
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          type="date"
          id="insert-date-input"
          name="gasto-date"
          min="2000-01-01"
          max="2030-01-01"
        />
      </label>
      <button
        type="button"
        onClick={() => insertGasto()}
      >
        Inserir

      </button>
    </>
  );
}

export default MainUserScreen;
