
import NavBar from "./NavigationBar/NavBar"
import BackgroundImage from "./BackgroundImageDir/BackgroundImage";
import WebsiteRoutes from "./WebsiteRoutesDom/WebsiteRoutes";

function App() {
  return (
    <>
      <div className="wrapper">
        <BackgroundImage />
        <div className="container">
          <NavBar />
          <WebsiteRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
