import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <main>
            <h1>HELLO</h1>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
