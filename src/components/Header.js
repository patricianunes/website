import React from "react";
import Twitter from "../images/twitter.png";
import Linkedin from "../images/linkedin.png";
import Github from "../images/github.png";

const Header = () => (
  <div>
    <ul>
      <li>
        <span
          role="img"
          style={{ fontSize: "64px", margin: "0", padding: "0" }}
          alt="girl and computer"
        >
          👩🏻‍💻
        </span>
      </li>
      <li>
        <a href="https://twitter.com/Paticnunes">
          <img src={Twitter} alt="Twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/patricia-nunes-12a60516b/">
          <img src={Linkedin} alt="Linkedin" />
        </a>
      </li>
      <li>
        <a href="https://github.com/patricianunes">
          <img src={Github} alt="Github" />
        </a>
      </li>
    </ul>
  </div>
);

export default Header;
