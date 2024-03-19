import "./Message.css";

function Message() {
  return (
    <section className="message">
      <h1>Leave a message.</h1>

      <form action="">
        <div className="message-name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="message-email">
          <input type="email" placeholder="Email" />
          <div className="message-email-presets">
            <button>?</button>
            <button className="preset-btn">@gmail.com</button>
            <button className="preset-btn">@outlook.com</button>
            <button className="preset-btn">@yahoo.com</button>
          </div>
        </div>
        
        <input type="tel" placeholder="Phone" />

        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Clear</button>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default Message;
