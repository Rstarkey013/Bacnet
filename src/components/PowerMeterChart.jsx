// src/components/PowerMeterChart.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';

const PowerMeterChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Power Usage',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  return <Bar data={data} />;
};

export default PowerMeterChart;
