import "./Message.css";

function Message() {
  return (
    <section className="message">
      <h1>
        To get in touch with me, please take a moment to fill out the form
        provided below.
      </h1>

      <form>
        <div className="message-name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="message-email">
          <input type="email" placeholder="Email" />
          <div className="message-email-presets">
            <button className="preset-btn">@gmail.com</button>
            <button className="preset-btn">@outlook.com</button>
            <button className="preset-btn">@yahoo.com</button>
          </div>
        </div>

        <input type="tel" placeholder="Phone (Optional)" />

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
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
