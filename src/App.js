import "./App.css";
import React from "react";
import Navbar from "./Component/navbar";
import Intro from "./Component/intro";
import About from "./Component/about";
import Project from "./Component/project";
import Contact from "./Component/contact";
import Footer from "./Component/footer";
import { BrowserRouter as Router, Routes,Route  } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Contact />
      <Footer />

    {/* <Router>
      <Routes>
        <Route path="/" element = {<Navbar/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
      </Routes>
    </Router> */}
    </div>
  );
}

export default App;
