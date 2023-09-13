import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";
import NavBar from "./components/NavBar/NavBar";
// import Home from "./containers/Home/index";
import Header from "./components/Header/Header";
import Education from "./containers/Education/Education";
import Certifications from "./containers/Certifications/Certifications";
import Testimonials from "./containers/Testimonials/Testimonials";
import Projects from "./containers/Projects/index";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header/>
          <NavBar />
          
          <Education />
          <Projects />
          <Certifications/>
          <Testimonials/>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
