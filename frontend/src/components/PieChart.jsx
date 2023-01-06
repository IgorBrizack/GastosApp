import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';

ChartJS.register(...registerables);

function PieChart({ chartData }) {
  return (
    <div style={
      {
        padding: '20px',
        // width: '50%',
      }
    }
    >
      <Pie data={chartData} />
    </div>
  );
}

PieChart.propTypes = {
  chartData: PropTypes.objectOf({
    labels: PropTypes.array,
    datasets: PropTypes.object,
  }).isRequired,
};

export default PieChart;
