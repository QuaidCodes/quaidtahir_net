import { Routes, Route } from "react-router-dom";

import Home from "../HomeDom/Home";
import Projects from "../ProjectsDom/Projects";
import Resume from "../ResumeDom/Resume";

function WebsiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default WebsiteRoutes;
