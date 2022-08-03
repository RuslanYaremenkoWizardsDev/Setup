import React from 'react';
import MuiButton from '@mui/material/Button';

interface IProps {
  content: string;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({ content, onClick }) => (
  <MuiButton
    onClick={onClick}
    variant="contained"
    data-testid="button"
  >
    {content}
  </MuiButton>
);

export default Button;
