import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";

import GlobalStyle from "./globalStyles";
import Mains from "./components/Mains";
import WorkPage from "./components/WorkPage";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Aboutpage from "./components/Aboutpage";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Mains />} />
            <Route exact path="/about" element={<Aboutpage />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/work" element={<WorkPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
