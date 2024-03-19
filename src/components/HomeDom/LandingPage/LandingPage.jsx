
import { Link } from "react-router-dom";

import Music from "../../Music/Music"
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing-page">
      <Music />

      <h1>Hello World!</h1>
      <h1>This is Quaid Tahir.</h1>

      <div className="landing-page-btns">
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </section>
  );
}

export default LandingPage;
