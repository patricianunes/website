import React from "react";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import MyWork from "./components/MyWork";
import Skill from "./components/Skills";
import GetInTouch from "./components/GetInTouch";
import NavigationList from "./components/NavigationList";

const App = () => {
  window.location.hash = "#header";

  return (
    <div className="app">
      <Header />
      <Content />
      <MyWork />
      <Skill />
      <GetInTouch />
      <NavigationList />
    </div>
  );
};

export default App;
