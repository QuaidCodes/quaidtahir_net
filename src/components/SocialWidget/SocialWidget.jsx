import { useState } from "react";

import facebook1 from "../../images/socials/icons8-facebook-50 (1).png";
import facebook from "../../images/socials/icons8-facebook-50.png";
import insta1 from "../../images/socials/icons8-insta-50 (1).png";
import insta from "../../images/socials/icons8-insta-50.png";
import github1 from "../../images/socials/icons8-github-50 (1).png";
import github from "../../images/socials/icons8-github-50.png";
import linkedin1 from "../../images/socials/icons8-linkedin-50 (1).png";
import linkedin from "../../images/socials/icons8-linkedin-50.png";
import x1 from "../../images/socials/icons8-x-50 (1).png";
import x from "../../images/socials/icons8-x-50.png";
import "./SocialWidget.css";

function SocialWidget() {
  const [githubState, setgithubState] = useState(github);
  const [linkedinState, setlinkedinState] = useState(linkedin);
  const [instaState, setinstaState] = useState(insta);
  const [facebookState, setfacebookState] = useState(facebook);
  const [xState, setxState] = useState(x);

  return (
    <div className="social-widget">
      <a href="https://github.com/QuaidCodes" target="_blank">
        <img src={githubState} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/quaid-tahir-5a3057173/" target="_blank">
        <img src={linkedinState} alt="LinkedIn" />
      </a>
      <a href="" target="_blank" className="social-widget-not-active">
        <img src={instaState} alt="Instagram" />
      </a>
      <a href="" target="_blank" className="social-widget-not-active">
        <img src={xState} alt="X" />
      </a>
      <a href="" target="_blank" className="social-widget-not-active">
        <img src={facebookState} alt="Facebook" />
      </a>
    </div>
  );
}

export default SocialWidget;
