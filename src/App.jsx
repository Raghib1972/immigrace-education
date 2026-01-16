import { BrowserRouter } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import useScrollTop from "./hooks/useScrollTop";
import AppRoutes from "./routes/AppRoutes";


const AppLayout = () => {
  useScrollTop();

  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;



