import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getData } from '../services/request';

ChartJS.register(...registerables);

function BarChart() {
  const [monthsValues, setMonthsValues] = useState({
    janeiro: 0,
    fevereiro: 0,
    marco: 0,
    abril: 0,
    maio: 0,
    junho: 0,
    julho: 0,
    agosto: 0,
    setembro: 0,
    outubro: 0,
    novembro: 0,
    dezembro: 0,
  });

  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
      label: 'Gasto Mensal Acumulado 2023 todos usuários',
      data: [
        monthsValues.janeiro,
        monthsValues.fevereiro,
        monthsValues.marco,
        monthsValues.abril,
        monthsValues.maio,
        monthsValues.junho,
        monthsValues.julho,
        monthsValues.agosto,
        monthsValues.setembro,
        monthsValues.outubro,
        monthsValues.novembro,
        monthsValues.dezembro],
      backgroundColor: [
        'rgba(100,149,237,0.7)',
        'rgba(65,105,225,0.7)',
        'rgba(30,144,255,0.7)',
        'rgba(0,191,255,0.7)',
        'rgba(135,206,250,0.7)',
        'rgba(135,206,235,0.7)',
        'rgba(100,149,237,0.7)',
        'rgba(65,105,225,0.7)',
        'rgba(30,144,255,0.7)',
        'rgba(0,191,255,0.7)',
        'rgba(135,206,250,0.7)',
        'rgba(135,206,235,0.7)',
      ],
    }],
  };

  const monthValues = (jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez) => {
    const toReduceMonthValue = (month) => {
      const total = month.reduce((acc, el) => {
        const sum = acc + Number(el.value);
        return sum;
      }, 0);
      return total;
    };

    const janTotal = toReduceMonthValue(jan);
    const fevTotal = toReduceMonthValue(fev);
    const marTotal = toReduceMonthValue(mar);
    const abrTotal = toReduceMonthValue(abr);
    const maiTotal = toReduceMonthValue(mai);
    const junTotal = toReduceMonthValue(jun);
    const julTotal = toReduceMonthValue(jul);
    const agoTotal = toReduceMonthValue(ago);
    const setTotal = toReduceMonthValue(set);
    const outTotal = toReduceMonthValue(out);
    const novTotal = toReduceMonthValue(nov);
    const dezTotal = toReduceMonthValue(dez);

    setMonthsValues({
      janeiro: janTotal,
      fevereiro: fevTotal,
      marco: marTotal,
      abril: abrTotal,
      maio: maiTotal,
      junho: junTotal,
      julho: julTotal,
      agosto: agoTotal,
      setembro: setTotal,
      outubro: outTotal,
      novembro: novTotal,
      dezembro: dezTotal,
    });
  };

  const separetedDataValues = (content) => {
    const jan = content.filter((el) => el.gastoDate.split('/')[1] === '01');
    const fev = content.filter((el) => el.gastoDate.split('/')[1] === '02');
    const mar = content.filter((el) => el.gastoDate.split('/')[1] === '03');
    const abr = content.filter((el) => el.gastoDate.split('/')[1] === '04');
    const mai = content.filter((el) => el.gastoDate.split('/')[1] === '05');
    const jun = content.filter((el) => el.gastoDate.split('/')[1] === '06');
    const jul = content.filter((el) => el.gastoDate.split('/')[1] === '07');
    const ago = content.filter((el) => el.gastoDate.split('/')[1] === '08');
    const set = content.filter((el) => el.gastoDate.split('/')[1] === '09');
    const out = content.filter((el) => el.gastoDate.split('/')[1] === '10');
    const nov = content.filter((el) => el.gastoDate.split('/')[1] === '11');
    const dez = content.filter((el) => el.gastoDate.split('/')[1] === '12');

    return monthValues(jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez);
  };

  const gastoMensal = async () => {
    try {
      const gastoMensalResult = await getData('/gasto/dates');
      return separetedDataValues(gastoMensalResult);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    gastoMensal();
  }, []);
  return (
    <div className="bar-chart">
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
