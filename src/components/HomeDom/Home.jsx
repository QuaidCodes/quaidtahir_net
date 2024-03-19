
import LandingPage from "./LandingPage/LandingPage";
import FeaturedProject from "../ProjectsDom/FeaturedProject/FeaturedProject";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-main-content">
        <LandingPage />
        <FeaturedProject />
      </div>
    </>
  );
}

export default Home;
