import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

import logo from '../assets/logo.png'; // Assuming your logo is stored in the assets folder

// Custom styled components
const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f3f4f6',
}));

const FormContainer = styled('div')(() => ({
  backgroundColor: '#fff',
  padding: '24px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  maxWidth: '480px',
  width: '100%',
}));

const Title = styled('h2')(() => ({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '8px',
  color: '#111827',
}));

const Description = styled('p')(() => ({
  fontSize: '14px',
  color: '#4b5563',
  marginBottom: '16px',
  textAlign: 'start',
}));

export default function RequestAccessPage() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
  });
    const navigate = useNavigate(); // Initialize the navigate function
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleRequest = () => {
    navigate('/request-submitted'); // Navigate to the Login page
  };

  return (
    <PageWrapper>
      <FormContainer>
        {/* Logo */}
        <div className="text-center mb-6">
          <img src={logo} alt="Ship My Deal" className="mx-auto h-12 w-auto" />
        </div>

        {/* Title and Description */}
        <Title>Request Access to Ship My Deal</Title>
        <Description>
          To ensure Ship My Deal is the right fit for your needs, we start with
          a quick form. Our team will then reach out to learn more about your
          requirements, explain how our platform works, and provide personalized
          onboarding.
        </Description>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <FormGrid item xs={12}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <OutlinedInput
                id="email"
                name="email"
                type="email"
                placeholder="jane.doe@myshop.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>
            <FormGrid item xs={6}>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <OutlinedInput
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Geovany"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>
            <FormGrid item xs={6}>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <OutlinedInput
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Rath"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>
            <FormGrid item xs={12}>
              <FormLabel htmlFor="phone">Phone Number</FormLabel>
              <OutlinedInput
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (000) 000-0000"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                size="small"
              />
            </FormGrid>
            <FormGrid item xs={12}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <OutlinedInput
                id="message"
                name="message"
                type="text"
                placeholder="Please describe the purpose of your request."
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                size="small"
              />
            </FormGrid>
            
          </Grid>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            onClick={handleRequest}
            fullWidth
            sx={{
              marginTop: '16px',
              backgroundColor: 'text-sky-500',
              color: '#fff',
              '&:hover': { backgroundColor: 'text-sky-500' },
            }}
          >
            Request Access
          </Button>
        </form>

        {/* Already have an account */}
        <p className="text-center mt-4 text-sm text-gray-700">
          Already have a ShipMyDeal account?{' '}
          <Link to="/login" className="text-sky-500 underline">
            Log in
          </Link>
        </p>
      </FormContainer>
    </PageWrapper>
  );
}
