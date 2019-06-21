import React from "react";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import MyWork from "./components/MyWork";

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <MyWork />
    </div>
  );
}

export default App;
