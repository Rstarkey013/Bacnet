// src/components/Dashboard.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import ThermostatChart from './ThermostatChart';
import AlarmChart from './AlarmChart';
import PowerMeterChart from './PowerMeterChart';
import '../styles/dashboard.css';  // Import the CSS file

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Line, Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [priorityItems, setPriorityItems] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Fetch data from deployed API
    axios.get('https://157.245.137.123:3000/devices')
      .then(response => {
        setData(response.data);
        setPriorityItems(response.data.filter(item => item.priority === 'high'));
      })
      .catch(error => {
        console.error("Error fetching data", error);
      });
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <div className="dashboard-layout">
        <Sidebar />
        <div style={{ width: '100%' }}>
          <div className="header">
            <h1 className="header-title">React BACnet Dashboard</h1>
          </div>
          <div className="content">
            <div className="main-content">
              <div className="dashboard-container">
                <div className="priority-items">
                  <h2>BACnet Devices Dashboard</h2>
                  <ul>
                    {priorityItems.map(item => (
                      <li key={item.id}>{item.name}: {item.status}</li>
                    ))}
                  </ul>
                </div>
                <div className="data-container">
                  <div className="chart-container">
                    <h3>Thermostat Data</h3>
                    <ThermostatChart />
                  </div>
                  <div className="chart-container">
                    <h3>Alarm Data</h3>
                    <AlarmChart />
                  </div>
                  <div className="chart-container">
                    <h3>Power Meter Data</h3>
                    <PowerMeterChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
