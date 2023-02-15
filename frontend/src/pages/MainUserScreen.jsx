import React, { useState, useEffect, useContext } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import '../bootstrap.min.css';
import '../style.css';
import Header from '../components/Header';
import { postData, getData } from '../services/request';
import GastosList from '../components/GastosList';
import UserContext from '../contexts/UserContext';
import PieChart from '../components/PieChart';
import PorcentagensComponent from '../components/Porcentagens';
import Footer from '../components/Footer';

ChartJS.register(...registerables);

function MainUserScreen() {
  const {
    setUserGastoData,
    hasUpdated,
    setHasUpdated,
  } = useContext(UserContext);

  const [selectedType, setSelectedType] = useState('alimentacao');
  const [date, setDate] = useState();
  const [valueGasto, setValueGasto] = useState();

  const getAllData = async () => {
    const { email } = JSON.parse(localStorage.getItem('user'));

    try {
      const data = await getData(`/gasto/${email}`);
      return setUserGastoData(data);
    } catch (error) {
      return error.message;
    }
  };

  const insertGasto = async () => {
    const { email } = JSON.parse(localStorage.getItem('user'));
    try {
      await postData('/gasto', {
        email,
        value: Number(valueGasto),
        type: selectedType,
        date: date.split('-').reverse().join('/'),
      });

      return setHasUpdated(!hasUpdated);
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
        <div className="pie-and-percentage-main-container">
          <div
            className="pie-chart-from-users"
          >
            <PieChart />
          </div>
          <PorcentagensComponent />
        </div>
        <div className="inserir-gastos-main-container">
          <h2>Inserir novo gasto</h2>
          <label htmlFor="dinheiro">
            R$
            <input
              className="form-control"
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
            <select className="form-select form-select-sm mb-3" onClick={(e) => setSelectedType(e.target.value)} name="select">
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
              className="form-control"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type="date"
              id="insert-date-input"
              name="gasto-date"
              min="2023-01-01"
              max="2030-01-01"
            />
          </label>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => insertGasto()}
          >
            Inserir
          </button>
        </div>
      </div>
      <GastosList />
      <Footer />
    </>
  );
}

export default MainUserScreen;
