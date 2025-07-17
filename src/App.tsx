import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "@/components/common/ThemeProvider/ThemeProvider";
import GlobalStyles from "@/styles/GlobalStyles";
import Layout from "@/components/layout/Layout/Layout";
import HomePage from "@/pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyles />
        <Layout>
          <HomePage />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
