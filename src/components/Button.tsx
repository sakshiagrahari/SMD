import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface ButtonProps extends MuiButtonProps {
  label: string;
  onClick?: () => void; 
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
  variant?: 'text' | 'outlined' | 'contained';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string; 
  type?: 'button' | 'submit' | 'reset'; 
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = 'primary',
  variant = 'contained',
  fullWidth = false,
  disabled = false,
  className = '',
  type = 'button', 
  ...rest 
}) => {
  return (
    <MuiButton
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick} 
      type={type} 
      className={className}
      {...rest} 
    >
      {label}
    </MuiButton>
  );
};

export default Button;
