import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header.js";
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer.js";

function App() {
  document.body.style.backgroundColor = "#4b5d67";
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/React-Portfolio" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/React-Portfolio/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/React-Portfolio/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
