
import LandingPage from "./LandingPage/LandingPage";
import FeaturedVod from "../FeaturedVodDir/FeaturedVod";
import Message from "../MessageDir/Message";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-main-content">
        <LandingPage />
        {/* <FeaturedVod /> */}
        <Message />
      </div>
    </>
  );
}

export default Home;
