import React from 'react';
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#8ba1e8', 
    },
    secondary: {
      main: '#6b1a84',  
    },
    Text: {
      main: '#ffffff',  
    },
    Accent: {
      main: '#dd54cb',  
    },
  },
});

export default Theme;