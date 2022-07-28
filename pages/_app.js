import '../styles/globals.css'
import { ThemeProvider } from '@material-tailwind/react';
import { MATERIALS_TAILWIND_THEME } from '../config/material';

function MyApp({ Component, pageProps }) {

  return <ThemeProvider value={MATERIALS_TAILWIND_THEME}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
