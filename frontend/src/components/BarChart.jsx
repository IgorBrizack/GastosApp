import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

ChartJS.register(...registerables);

function BarChart({ chartData }) {
  return (
    <Bar data={chartData} />
  );
}

BarChart.propTypes = {
  chartData: PropTypes.objectOf({
    labels: PropTypes.array,
    datasets: PropTypes.object,
  }).isRequired,
};

export default BarChart;
