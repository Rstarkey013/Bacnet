// src/components/InitialSignup.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f7f6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #444;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #2c3e50;
  color: #ecf0f1;
  cursor: pointer;

  &:hover {
    background-color: #34495e;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 20px;
`;

const InitialSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;

    if (password.length < 8 || !passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain at least one numerical value and one special character.');
    } else {
      setError('');
      // Redirect to the next signup step
      navigate('/signup');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Create Account</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Continue</Button>
      </Form>
    </Container>
  );
};

export default InitialSignup;
