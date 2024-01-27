import LandingPage from "./LandingPageDirectory/LandingPage";
import WebsiteRoutes from "./WebsiteRoutesDom/WebsiteRoutes";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <LandingPage />
          <WebsiteRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
