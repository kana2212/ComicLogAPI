import { Chip, Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026',
      contrastText: '#242105',
    },
  },
});
export const BaseButton = () => {
  const history = useNavigate();

  const handleClick = () => {
    history('/logpage');
  };
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={1}>
      <Chip label="使ってみる" color="ochre" sx={{ letterSpacing: '3px'}} onClick={handleClick} />
        </Stack>
    </ThemeProvider>
  );
}
export default BaseButton;