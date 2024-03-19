import { Routes, Route } from "react-router-dom";

import Home from "../HomeDom/Home";
import Projects from "../ProjectsDom/Projects";
import Portfolio from "../Portfolio/Portfolio"
import About from "../About/About";
import Contact from "../Contact/Contact";

function WebsiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aobut" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default WebsiteRoutes;
