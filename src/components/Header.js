import React from "react";

import "./Header.css";
import Logo from "./Logo";
import Nav from "./Nav/Nav";

const Header = () => (
  <header className="header" id="header">
    <Logo />
    <Nav />
  </header>
);

export default Header;
