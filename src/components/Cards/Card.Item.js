import React from "react";

import "./Card.Item.css";

const CardItem = props => {
  const {
    name,
    description,
    image,
    github,
    value,
    linkGitHub,
    linkValue
  } = props;

  return (
    <li className="grid__item">
      {value && image ? (
        <div className="card">
          <a href={value}>
            <img src={image} alt={name} />
          </a>
          <div className="card__text">
            <h3>{name}</h3>
            <p>{description}</p>
            <a className="card__link" href={github}>
              <i className="fab fa-github" style={{ color: "#444444" }} />
              {linkGitHub}
            </a>
            <a className="card__link" href={value}>
              <i
                className="fas fa-window-restore siteIcon"
                style={{ color: "#444444" }}
              />
              {linkValue}
            </a>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card__text">
            <h3>{name}</h3>
            <p>{description}</p>
            <a className="card__link" href={github}>
              <i className="fab fa-github" style={{ color: "#444444" }} />
              {linkGitHub}
            </a>
          </div>
        </div>
      )}
    </li>
  );
};

export default CardItem;
