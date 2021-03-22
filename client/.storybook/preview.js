import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@/common/styles';
import { StoreProvider, RootStore } from '@/stores';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const rootStore = new RootStore();

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <StoreProvider value={rootStore}>
        <Story />
      </StoreProvider>
    </ThemeProvider>
  ),
];
