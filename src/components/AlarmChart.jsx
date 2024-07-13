// src/components/AlarmChart.jsx

import React from 'react';
import { Pie } from 'react-chartjs-2';

const AlarmChart = () => {
  const data = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB']
      }
    ]
  };

  return <Pie data={data} />;
};

export default AlarmChart;
