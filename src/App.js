import { ChakraProvider, Box } from "@chakra-ui/react";
import "./App.css";
import About from "./pages/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import MainDrawer from "./components/drawer";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
function App() {
  return (
    <ChakraProvider>
      <MainDrawer />
      <Box overflowX="hidden" maxW="100vw">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Home" element={<MainPage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
