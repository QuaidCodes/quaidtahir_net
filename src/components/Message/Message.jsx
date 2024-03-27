import { useState } from "react";

import "./Message.css";

function Message() {
  const [email, setEmail] = useState("");

  function emailHandler(event) {
    setEmail(event.target.value);
    console.log(email);
  }

  function preset(event, target) {
    event.preventDefault();

    // g for gmail, o for outlook, y for yahoo
    if (target === "g") setEmail(email + "@gmail.com");
    else if (target === "o") setEmail(email + "@outlook.com");
    else if (target === "y") setEmail(email + "@yahoo.com");
  }

  return (
    <section className="message">
      <h1>
        To get in touch with me, please take a moment to fill out the form
        provided below.
      </h1>

      <form>
        <div className="message-name">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="message-email">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => emailHandler(e)}
            value={email}
            required
          />
          <div className="message-email-presets">
            <button className="preset-btn" onClick={(e) => preset(e, "g")}>
              @gmail.com
            </button>
            <button className="preset-btn" onClick={(e) => preset(e, "o")}>
              @outlook.com
            </button>
            <button className="preset-btn" onClick={(e) => preset(e, "y")}>
              @yahoo.com
            </button>
          </div>
        </div>

        <input type="tel" placeholder="Phone (Optional)" />

        <textarea
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>

        <div className="message-btns">
          <button className="message-clear-btn">Clear</button>
          <button className="message-submit-btn">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Message;
