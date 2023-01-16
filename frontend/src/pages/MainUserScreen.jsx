import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import PieChart from '../components/PieChart';
import '../style.css';
import Header from '../components/Header';
import { getData, postData } from '../services/request';
import PorcentagensComponent from '../components/Porcentagens';
import GastosList from '../components/GastosList';

ChartJS.register(...registerables);

function MainUserScreen() {
  const [selectedType, setSelectedType] = useState('alimentacao');
  const [date, setDate] = useState();
  const [valueGasto, setValueGasto] = useState('0');
  const [allChartData, setChartData] = useState();
  const [render, setRender] = useState(true);
  const [hasPercentages, setHasPercentages] = useState(false);
  const [eduPercentage, setEduPercentage] = useState();
  const [lazerPercentage, setLazerPercentage] = useState();
  const [investPercentage, setInvestPercentage] = useState();
  const [alimentacaoPercentage, setAlimentacaoPercentage] = useState();
  const [servicoPercentage, setServicoPercentage] = useState();

  const getPercentages = (data) => {
    const total = data.reduce((acc, el) => {
      const sum = acc + el.value;
      return sum;
    }, 0);

    const [lazerValue] = data.filter((el) => el.type === 'lazer');
    const [educacaoValue] = data.filter((el) => el.type === 'educacao');
    const [investimentoValue] = data.filter((el) => el.type === 'investimento');
    const [servicoValue] = data.filter((el) => el.type === 'servico');
    const [alimentacaoValue] = data.filter((el) => el.type === 'alimentacao');

    const lazerPercentual = ((Number(lazerValue.value) * 100) / total);
    const educacaoPercentual = ((Number(educacaoValue.value) * 100) / total);
    const investimentoPercentual = ((Number(investimentoValue.value) * 100) / total);
    const servicoPercentual = ((Number(servicoValue.value) * 100) / total);
    const alimentacaoPercentual = ((Number(alimentacaoValue.value) * 100) / total);

    setEduPercentage(educacaoPercentual);
    setLazerPercentage(lazerPercentual);
    setInvestPercentage(investimentoPercentual);
    setAlimentacaoPercentage(alimentacaoPercentual);
    setServicoPercentage(servicoPercentual);
    setHasPercentages(true);
  };

  const formatedData = (data) => {
    getPercentages(data);
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
        email, value: Number(valueGasto), type: selectedType, date,
      });
      return setRender(!render);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    setHasPercentages(false);
    getAllData();
  }, [render]);

  return (
    <>
      <Header />
      <div
        className="pie-chart-from-users"
      >
        {allChartData && (<PieChart chartData={allChartData} />)}

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
          onChange={(e) => setDate(e.target.value.split('-').reverse().join('/'))}
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
      {hasPercentages && (
      <PorcentagensComponent
        lazer={lazerPercentage}
        servico={servicoPercentage}
        educacao={eduPercentage}
        investimento={investPercentage}
        alimentacao={alimentacaoPercentage}
      />
      )}
      <GastosList />
    </>
  );
}

export default MainUserScreen;
