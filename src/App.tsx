import { RouterProvider } from 'react-router-dom';
import ThemeProvider from '@/components/common/ThemeProvider/ThemeProvider';
import GlobalStyles from '@/styles/GlobalStyles';
import { router } from '@/router';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
