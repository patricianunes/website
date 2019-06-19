import * as React from "react";

import "./Nav.Item.css";

const NavItem = props => {
  const { name, value } = props;
  return (
    <li>
      {value ? (
        <a className="link" href={value}>
          <i className={`fab fa-${name.toLowerCase()}`} />
        </a>
      ) : (
        <span className="girl" role="img" aria-label="web girl">
          {name}
        </span>
      )}
    </li>
  );
};

export default NavItem;
