export interface ButtonDTO {
    label: string;
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'default';
    variant?: 'text' | 'outlined' | 'contained';
    fullWidth?: boolean;
    disabled?: boolean;
  }
  
  export interface InputFieldDTO {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'email' | 'password' | 'number';
    fullWidth?: boolean;
    multiline?: boolean;
    rows?: number;
  }
  