import React from "react";

import "./Card.Item.css";

const CardItem = props => {
  const { name, description, image, github, value } = props;

  return (
    <li>
      {value && image ? (
        <div className="card">
          <a href={value}>
            <img src={image} alt={name} />
          </a>
          <p>{description}</p>
          <a className="card__link" href={github}>
            <i className="fab fa-github" style={{ color: "#444444" }} />{" "}
            {github}
          </a>
        </div>
      ) : (
        <div className="card">
          <p>{description}</p>
          <a className="card__link" href={github}>
            <i className="fab fa-github" style={{ color: "#444444" }} />{" "}
            {github}
          </a>
        </div>
      )}
    </li>
  );
};

export default CardItem;
