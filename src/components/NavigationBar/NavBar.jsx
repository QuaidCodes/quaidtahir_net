import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

import "./NavBar.css";

function NavBar() {
  const [bgColor, setBgColor] = useState(null);
  const [bgPortfolio, setBgColorPortfolio] = useState("");
  const [bgProjects, setBgColorProjects] = useState("");
  const [bgPapers, setBgColorPapers] = useState("");
  const [bgContact, setBgColorContact] = useState("");

  function selectedNavBar(target) {
    resetBg();

    if (target      === "home") setBgColor("#36d1c4");
    else if (target === "portfolio") setBgColorPortfolio("#36d1c4");
    else if (target === "projects") setBgColorProjects("#36d1c4");
    else if (target === "papers") setBgColorPapers("#36d1c4");
    else if (target === "contact") setBgColorContact("#36d1c4");
  }

  function resetBg() {
    setBgColor("");
    setBgColorPortfolio("");
    setBgColorProjects("");
    setBgColorPapers("");
    setBgColorContact("");
  }

  return (
    <nav>
      <ul className="navBar">
        <Link
          to="/"
          style={{ backgroundColor: bgColor }}
          onClick={() => selectedNavBar("home")}
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          style={{ backgroundColor: bgPortfolio }}
          onClick={() => selectedNavBar("portfolio")}
        >
          Portfolio
        </Link>
        <Link
          to="/projects"
          style={{ backgroundColor: bgProjects }}
          onClick={() => selectedNavBar("projects")}
        >
          Projects
        </Link>
        <Link
          to="/papers"
          style={{ backgroundColor: bgPapers }}
          onClick={() => selectedNavBar("papers")}
        >
          Papers
        </Link>
        <Link
          to="/contact"
          style={{ backgroundColor: bgContact }}
          onClick={() => selectedNavBar("contact")}
        >
          Contact
        </Link>
        <Outlet />
      </ul>
    </nav>
  );
}

export default NavBar;
