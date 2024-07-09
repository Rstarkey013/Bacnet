// src/components/Dashboard.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
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
import Sidebar from './Sidebar';

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

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f7f6;
  }
`;

const DashboardLayout = styled.div`
  display: flex;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(100% - 220px); // Adjust for sidebar width and gap
  margin-left: 220px; // Adjust for sidebar width and gap
  transition: margin-left 0.3s ease;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2.5em;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  width: calc(100% - 220px); // Adjust for sidebar width and gap
  margin-left: 220px; // Adjust for sidebar width and gap
  transition: margin-left 0.3s ease;
`;

const MainContent = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriorityItems = styled.div`
  margin-bottom: 20px;
  width: 100%;
  background-color: #ffebeb;
  padding: 20px;
  border: 1px solid #ff0000;
  border-radius: 5px;

  h2 {
    margin-top: 0;
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
`;

const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const ChartContainer = styled.div`
  width: 30%; // Reduce the size of the charts
  background-color: #fff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin-bottom: 20px;
    font-size: 1.5em;
    color: #444;
  }
`;

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [priorityItems, setPriorityItems] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Fetch data from mock API
    axios.get('http://localhost:5000/devices')
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
      <GlobalStyle />
      <DashboardLayout>
        <Sidebar />
        <div style={{ width: '100%' }}>
          <Header>
            <HeaderTitle>React BACnet Dashboard</HeaderTitle>
          </Header>
          <Content>
            <MainContent>
              <DashboardContainer>
                <PriorityItems>
                  <h2>BACnet Devices Dashboard</h2>
                  <ul>
                    {priorityItems.map(item => (
                      <li key={item.id}>{item.name}: {item.status}</li>
                    ))}
                  </ul>
                </PriorityItems>
                <DataContainer>
                  {data.map(device => (
                    <ChartContainer key={device.id}>
                      <h3>{device.name}</h3>
                      {device.type === 'temperature' && (
                        <Line data={{
                          labels: device.data.map(d => d.timestamp),
                          datasets: [{
                            label: 'Temperature',
                            data: device.data.map(d => d.value),
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 2,
                            fill: false
                          }]
                        }} />
                      )}
                      {device.type === 'power' && (
                        <Bar data={{
                          labels: device.data.map(d => d.timestamp),
                          datasets: [{
                            label: 'Power Usage',
                            data: device.data.map(d => d.value),
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1
                          }]
                        }} />
                      )}
                      {device.type === 'alarm' && (
                        <Pie data={{
                          labels: ['Active', 'Inactive'],
                          datasets: [{
                            data: [device.data.filter(d => d.value === 'active').length, device.data.filter(d => d.value === 'inactive').length],
                            backgroundColor: ['#FF6384', '#36A2EB'],
                            hoverBackgroundColor: ['#FF6384', '#36A2EB']
                          }]
                        }} />
                      )}
                    </ChartContainer>
                  ))}
                </DataContainer>
              </DashboardContainer>
            </MainContent>
          </Content>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
