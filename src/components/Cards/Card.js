import React from "react";

import "./Card.css";
import TicTacToe from "./tictactoe.png";
import BjjKing from "./bjjking.png";
import CardItem from "./Card.Item";

const items = [
  {
    name: "tictactoe",
    description:
      "My first ever project was this 😼 vs 🐶 tic-tac-toe game. I wrote it as an assignment and had it reviewed by @cironunesdev",
    github: "https://github.com/patricianunes/TicTacToe",
    value: "https://patricianunes.github.io/TicTacToe/",
    image: TicTacToe
  },
  {
    name: "website",
    description:
      "This very website was programmed by me as an exercise to practice JS and React.",
    github: "https://github.com/patricianunes/website"
  },
  {
    name: "bjjking",
    description:
      "Ruby on Rails CRUD app with authentication deployed to Heroku. For the styles I used Bootstrap 4.",
    github: "https://github.com/patricianunes/bjjking",
    value: "https://bjjking.herokuapp.com/",
    image: BjjKing
  }
];

const Card = () => (
  <ul className="grid">
    {items.map(item => (
      <CardItem {...item} />
    ))}
  </ul>
);

export default Card;
