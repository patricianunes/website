import React from "react";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import MyWork from "./components/MyWork";
import Skill from "./components/Skills";

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <MyWork />
      <Skill />
    </div>
  );
}

export default App;
