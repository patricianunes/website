import React from "react";
import classnames from "classnames";

const NavigationItem = props => {
  const { icon, href } = props;
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const hashChange = window.addEventListener("hashchange", e => {
      setActive(window.location.hash === href);
    });

    return hashChange;
  });

  React.useEffect(() => {
    setActive(window.location.hash === href);
  }, [href]);

  const handleClick = e => {
    // e.preventDefault();
    // e.stopPropagation();
    // const targetHref = e.currentTarget.href;
    // setActive(targetHref.includes(window.location.hash));
    // debugger;
  };

  return (
    <li className={classnames("li_item", active && "active")}>
      <a className="navigation__item" href={href} onClick={e => handleClick(e)}>
        <i className={classnames("fas", icon)} />
      </a>
    </li>
  );
};

export default NavigationItem;
