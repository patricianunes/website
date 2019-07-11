import React from "react";

import "./GetInTouch.css";
import Nav from "./Nav/Nav";
import Form from "./Form";

const GetInTouch = () => (
  <section className="getInTouch" id="get-in-touch">
    <div>
      <h1 className="title getInTouch__title">Get In Touch</h1>
      <div className="social">
        <Nav hideGirl />
      </div>
      <Form />
    </div>
  </section>
);

export default GetInTouch;
