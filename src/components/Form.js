import React from "react";

import "./Form.css";

const Form = () => (
  <form action="mailto:patricia@krint.io" method="post" enctype="text/plain">
    <input type="text" name="name" placeholder="Name:" />
    <input type="text" name="email" placeholder="Email:" />
    <textarea
      style={{ height: "90px" }}
      type="text"
      name="message"
      placeholder="Message:"
      size="140"
    />
    <input type="submit" value="send" placeholder="Send" />
  </form>
);

export default Form;
