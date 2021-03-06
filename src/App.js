import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Play from "./pages/Play";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css"

const App = () => (
  <Router>
    <div className="fluid-container">
      
      <Wrapper>        
        <Route exact path="/" component={Play} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
