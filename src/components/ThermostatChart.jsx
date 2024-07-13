// src/components/ThermostatChart.jsx

import React from 'react';
import { Line } from 'react-chartjs-2';

const ThermostatChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Temperature',
        data: [22, 21, 23, 24, 25, 24, 23],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
      }
    ]
  };

  return <Line data={data} />;
};

export default ThermostatChart;
