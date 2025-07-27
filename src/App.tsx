import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from '@/components/common/ThemeProvider/ThemeProvider';
import GlobalStyles from '@/styles/GlobalStyles';
import { router } from '@/router';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
