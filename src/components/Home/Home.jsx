
import LandingPage from "./LandingPage/LandingPage";
import FeaturedProject from "../Projects/FeaturedProject/FeaturedProject";
import FeaturedVod from "../FeaturedVod/FeaturedVod";
import Message from "../Message/Message";
import "./Home.css";
import SocialWidget from "../SocialWidget/SocialWidget";

function Home() {
  return (
    <>
      <div className="home-main-content">
        <LandingPage />
        <FeaturedProject />
        {/* <FeaturedVod /> */}
        <Message />
        <SocialWidget />
      </div>
    </>
  );
}        

export default Home;
