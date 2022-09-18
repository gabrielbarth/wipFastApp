import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './theme';
import Routes from './routes';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar backgroundColor="#508599" translucent />
      <Routes />
    </ThemeProvider>
  );
}
