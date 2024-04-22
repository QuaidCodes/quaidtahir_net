
import { Link } from "react-router-dom";

import PortfolioIcon from "../../../images/icons/icons8-portfolio-50.png"
import ContactIcon from "../../../images/icons/icons8-contact-50.png"
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing-page">
      <h1>Hello World!</h1>
      <h1>This is Quaid Tahir.</h1>

      <div className="landing-page-btns">
        <Link to="/portfolio"><img src={PortfolioIcon} alt="Portfolio Icon" />Portfolio</Link>
        <Link to="/contact"><img src={ContactIcon} alt="Contact Icon" />Contact</Link>
      </div>
    </section>
  );
}

export default LandingPage;
