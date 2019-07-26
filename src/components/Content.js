import React from "react";

import "./Content.css";

const Content = () => (
  <section className="content" id="home">
    <div>
      <h1 className="title">Hi, I'm Patricia Nunes</h1>
      <p>Junior Web Developer, based in Sydney, seeking for my first job.</p>
      <p>
        I just finished the ​Software Engineering Immersive course at GA. Now I
        am looking for a junior position preferable as a ​Frontend​, but I am
        also keen to work as a ​Backend.​
      </p>
      <p>
        The kind of company that I want to work with cares about its employees
        as much as it does about the technology.
      </p>
      <p>
        Check out <a href="#my-work">my work</a> and feel free to{" "}
        <a href="#get-in-touch">get in touch</a>.
      </p>
    </div>
    <div className="arrow">
      <a href="#my-work">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
            fill="#444444"
          />
        </svg>
      </a>
    </div>
  </section>
);

export default Content;
