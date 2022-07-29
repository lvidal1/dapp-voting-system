import '../styles/globals.css'
import { ThemeProvider } from '@material-tailwind/react';
import { MATERIALS_TAILWIND_THEME } from '../config/material';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {

  return <ThemeProvider value={MATERIALS_TAILWIND_THEME}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
}

export default MyApp
