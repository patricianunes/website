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
    <li>
      <a href="/cv.pdf" download>
        <i className="fas fa-file-download" />
      </a>
    </li>
    <li>
      <span>
        <a href="mailto:patricia@krint.io?subject=GetInTouch from My Site">
          <i class="fas fa-envelope " />
        </a>
      </span>
    </li>
    {items.map(item => (
      <NavItem {...item} />
    ))}
  </ul>
);

export default Nav;
