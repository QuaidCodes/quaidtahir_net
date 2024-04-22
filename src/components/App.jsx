import NavBar from "./NavigationBarDir/NavBar";
import BackgroundImage from "./BackgroundImageDir/BackgroundImage";
import WebsiteRoutes from "./WebsiteRoutesDir/WebsiteRoutes";
import SocialWidget from "./SocialWidgetDir/SocialWidget";

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
      </div>s
    </>
  );
}

export default App;
