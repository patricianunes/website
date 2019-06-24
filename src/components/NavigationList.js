import React from "react";
import debounce from "lodash/debounce";

import "./NavigationList.css";
import NavigationItem from "./NavigationItem";

const items = [
  { name: "Home", icon: "fa-home", href: "#header" },
  { name: "My Work", icon: "fa-briefcase", href: "#my-work" },
  { name: "Skills", icon: "fa-fire", href: "#skills" },
  { name: "Get in Touch", icon: "fa-address-card", href: "#get-in-touch" }
];

const NavigationList = () => {
  React.useEffect(() => {
    let timeoutId;

    const onScroll = window.addEventListener(
      "scroll",
      debounce(e => {
        e.preventDefault();
        e.stopPropagation();
        // window.location.hash = "#my-work";
        // document.getElementById("my-work").scrollIntoView({
        //   behavior: "smooth"
        // });
      }, 10)
    );

    return onScroll;
  });

  return (
    <nav className="navigationList">
      <ul>
        {items.map(item => (
          <NavigationItem {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationList;
