import { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';

import { theme } from './styles/theme';
import FormBuilder from './pages/FormBuilder';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <FormBuilder />
      </Box>
    </ThemeProvider>
  );
};

export default App;
