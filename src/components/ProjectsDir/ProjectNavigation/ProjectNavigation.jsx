import { Link, Outlet } from "react-router-dom";

import "./ProjectNavigation.css";

export default function ProjectNavigation() {
  return (
    <div className="project-navigation">
      <div className="project-navbar">
        <Link to="/projects/banking-app">Banking App</Link>
        <Link to="/projects/pos-app">POS System</Link>
      </div>


      <Outlet />
    </div>
  );
}
