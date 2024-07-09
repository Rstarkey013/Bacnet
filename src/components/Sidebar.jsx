// src/components/Sidebar.jsx

import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #2c3e50;
  color: #ecf0f1;
  height: 100vh;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const SidebarItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #34495e;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>Dashboards</SidebarItem>
      <SidebarItem>Cases</SidebarItem>
      <SidebarItem>Work Orders</SidebarItem>
      <SidebarItem>Maintenance Schedule</SidebarItem>
      <SidebarItem>Building</SidebarItem>
      <SidebarItem>Clients</SidebarItem>
      <SidebarItem>Contractors</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
