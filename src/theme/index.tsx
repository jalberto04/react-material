import React, { useMemo } from 'react';
import { CssBaseline, PaletteMode, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import LightPalette from './palettes/light';
import Typography from './typography';
import componentsOverride from './overrides';

const Theme = ({ children, mode }: { children: React.ReactNode; mode?: PaletteMode }) => {
  const theme = useMemo(() => {
    const typography = Typography("'Public Sans', sans-serif");
    const palette = LightPalette; // mode === 'light' ? LightPalette : DarkPalette;
    const theme = createTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536
        }
      },
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: palette,
      typography: typography
    });
    return theme;
  }, [mode]);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Theme;
