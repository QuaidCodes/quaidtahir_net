
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
  return (
    <div className="social-widget">
      <a href="" target="_blank"><img src={facebook1} alt="" /> Github</a>
      <a href="" target="_blank"><img src={insta1} alt="" /> Linked In</a>
      <a href="" target="_blank"><img src={github1} alt="" /> X</a>
      <a href="" target="_blank"><img src={linkedin1} alt="" /> Instagram</a>
      <a href="" target="_blank"><img src={x1} alt="" /> facebook</a>
    </div>
  );
}

export default SocialWidget;
