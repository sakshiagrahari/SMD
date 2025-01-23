import React from 'react';
import { styled } from '@mui/material/styles';
import logo from '../assets/logo.png';

// Styled components
const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f3f4f6',
  padding: '16px',
}));

const LogoWrapper = styled('div')(() => ({
  marginBottom: '16px',
  textAlign: 'center',
}));

const MessageContainer = styled('div')(() => ({
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
  color: '#111827',
  marginBottom: '8px',
  textAlign: 'start',
}));

const Description = styled('p')(() => ({
  fontSize: '14px',
  color: '#4b5563',
  textAlign: 'start',
}));

const RequestSubmitted: React.FC = () => {
  return (
    <PageWrapper>
      {/* Logo */}
      <LogoWrapper>
        <img src={logo} alt="Ship My Deal" className="h-12 w-auto mx-auto" />
      </LogoWrapper>

      {/* Message Container */}
      <MessageContainer>
        <Title>Request Submitted!</Title>
        <Description>
          Thank you, we’ve received your request, and a Ship My Deal team member
          will contact you soon.
        </Description>
      </MessageContainer>
    </PageWrapper>
  );
};

export default RequestSubmitted;
