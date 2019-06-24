import React from "react";

import "./Card.Item.css";

const CardItem = props => {
  const { name, description, image, github, value } = props;

  return (
    <li className="grid__item">
      {value && image ? (
        <div className="card">
          <a href={value}>
            <img src={image} alt={name} />
          </a>
          <div className="card__text">
            <p>{description}</p>
            <a className="card__link" href={github}>
              <i className="fab fa-github" style={{ color: "#444444" }} />{" "}
              {github}
            </a>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card__text">
            <p>{description}</p>
            <a className="card__link" href={github}>
              <i className="fab fa-github" style={{ color: "#444444" }} />{" "}
              {github}
            </a>
          </div>
        </div>
      )}
    </li>
  );
};

export default CardItem;
