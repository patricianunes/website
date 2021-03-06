import React from "react";

import "./Nav.css";
import NavItem from "./Nav.Item";

const Nav = ({ hideGirl }) => {
  const items = [
    { name: "Twitter", value: "https://twitter.com/Paticnunes" },
    {
      name: "LinkedIn",
      value: "https://www.linkedin.com/in/patriciacnunes/"
    },
    { name: "GitHub", value: "https://github.com/patricianunes" },
    !hideGirl && { name: "👩🏻‍💻" }
  ];

  return (
    <ul className="nav">
      <li>
        <a href="/website/cv.pdf" download>
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
};

export default Nav;
