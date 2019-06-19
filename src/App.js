import React from "react";

import "./App.css";

import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
