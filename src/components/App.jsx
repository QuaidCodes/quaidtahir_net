
import NavBar from "./NavigationBar/NavBar"
import BackgroundImage from "./BackgroundImageDir/BackgroundImage";
import WebsiteRoutes from "./WebsiteRoutesDom/WebsiteRoutes";
import SocialWidget from "./SocialWidget/SocialWidget";

function App() {
  return (
    <>
      <div className="wrapper">
        <BackgroundImage />
        <SocialWidget />
        <div className="container">
          <NavBar />
          <WebsiteRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
