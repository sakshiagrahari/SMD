import React from 'react';
import { TextField } from '@mui/material';

interface InputFieldProps {
  id?: string;  
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  className?: string; 
  placeholder?: string;
  helperText?: string; 
}

const InputField: React.FC<InputFieldProps> = ({
  id,  
  label,
  name,
  value,
  onChange,
  type = 'text',
  fullWidth = true,
  multiline = false,
  rows = 1,
  className = '', 
  placeholder = '', 
  helperText = '', 
}) => {
  return (
    <TextField
      id={id}  
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
      variant="outlined"
      className={className} 
      placeholder={placeholder || 'Password'} 
      helperText={helperText} 
      error={helperText ? true : false} 
    />
  );
};

export default InputField;
