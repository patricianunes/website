import React from "react";

import "./Nav.css";
import NavItem from "./Nav.Item";

const items = [
  { name: "Twitter", value: "https://twitter.com/Paticnunes" },
  {
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/patricia-nunes-12a60516b/"
  },
  { name: "GitHub", value: "https://github.com/patricianunes" },
  { name: "👩🏻‍💻" }
];

const Nav = () => (
  <ul className="nav">
    {items.map(item => (
      <NavItem {...item} />
    ))}
  </ul>
);

export default Nav;
