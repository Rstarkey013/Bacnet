import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const SignupForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    state: '',
    city: '',
    region: '',
    numAccounts: '',
    multiCampus: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/dashboard');
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="companyName"
          placeholder="Name of Company"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <Select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">Select State</option>
          <option value="California">California</option>
          <option value="Texas">Texas</option>
          <option value="New York">New York</option>
          {/* Add more options as needed */}
        </Select>
        <Select
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        >
          <option value="">Select City</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Houston">Houston</option>
          <option value="New York City">New York City</option>
          {/* Add more options as needed */}
        </Select>
        <Select
          name="region"
          value={formData.region}
          onChange={handleChange}
          required
        >
          <option value="">Select Region</option>
          <option value="West Coast">West Coast</option>
          <option value="Midwest">Midwest</option>
          <option value="East Coast">East Coast</option>
          {/* Add more options as needed */}
        </Select>
        <Input
          type="number"
          name="numAccounts"
          placeholder="Number of Accounts"
          value={formData.numAccounts}
          onChange={handleChange}
          required
        />
        <label>
          <input
            type="checkbox"
            name="multiCampus"
            checked={formData.multiCampus}
            onChange={handleChange}
          />
          Multi-Campus
        </label>
        <Button type="submit">Sign Up</Button>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
