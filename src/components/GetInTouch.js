import React from "react";

import "./GetInTouch.css";
import Nav from "./Nav/Nav";
import Form from "./Form";

const GetInTouch = () => (
  <div className="getintouch">
    <h1 className="getintouch__title">Get In Touch</h1>
    <div className="social">
      <Nav />
    </div>
    <Form />
  </div>
);

export default GetInTouch;
