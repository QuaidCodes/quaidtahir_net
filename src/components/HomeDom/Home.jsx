
import LandingPage from "./LandingPage/LandingPage";
import FeaturedProject from "../ProjectsDom/FeaturedProject/FeaturedProject";
import FeaturedVod from "../FeaturedVod/FeaturedVod";
import Message from "../Message/Message";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-main-content">
        <LandingPage />
        <FeaturedProject />
        <FeaturedVod />
        <Message />
      </div>
    </>
  );
}

export default Home;
