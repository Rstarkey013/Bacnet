// src/components/Main.jsx

import React from 'react';
import styled from 'styled-components';
import Dashboard from './Dashboard';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f4f9;
  color: #333;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  padding: 20px;
  background-color: #3f51b5;
  color: white;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

const Footer = styled.footer`
  padding: 20px;
  background-color: #3f51b5;
  color: white;
  text-align: center;
`;

const Main = () => (
  <MainContainer>
    <Header>
      <h1>React BACnet Dashboard</h1>
    </Header>
    <MainContent>
      <Dashboard />
    </MainContent>
    <Footer>
      <p>&copy; 2024 Your Company</p>
    </Footer>
  </MainContainer>
);

export default Main;
