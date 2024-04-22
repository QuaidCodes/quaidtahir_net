import { Routes, Route } from "react-router-dom";

import Home from "../HomeDir/Home";
import Portfolio from "../PortfolioDir/Portfolio";

// Project Directories
import Projects from "../ProjectsDir/Projects";
import ProjectNavigation from "../ProjectsDir/ProjectNavigation/ProjectNavigation"
import BankingSystem from "../ProjectsDir/ProjectList/BankingSystemDir/BankingSystem";
import POSSystem from "../ProjectsDir/ProjectList/POSSystemDir/POSSystem";

import Papers from "../PapersDir/Papers";
import Contact from "../ContactDir/Contact";
import NotFound from "../NotFoundDir/NotFound";

function WebsiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectNavigation />} >
          {/* <Route index element={<Projects />} /> */}
          <Route path="banking-app" element={<BankingSystem />}/>
          <Route path="pos-app" element={<POSSystem />}/>
        </Route>
        <Route path="/papers" element={<Papers />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default WebsiteRoutes;
