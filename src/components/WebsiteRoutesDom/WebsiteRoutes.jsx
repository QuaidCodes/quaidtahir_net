import { Routes, Route } from "react-router-dom";

import Home from "../HomeDom/Home";
import Projects from "../ProjectsDom/Projects";
import Portfolio from "../Portfolio/Portfolio"
import Papers from "../Papers/Papers";
import Contact from "../Contact/Contact";

function WebsiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default WebsiteRoutes;
