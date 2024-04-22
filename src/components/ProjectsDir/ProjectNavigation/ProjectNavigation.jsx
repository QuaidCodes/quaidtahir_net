import { Link, Outlet } from "react-router-dom";

import "./ProjectNavigation.css";

export default function ProjectNavigation() {
  return (
    <div className="project-navigation">
      <Link to="/projects/banking-app">Banking App</Link>
      <Link to="/projects/pos-app">POS System</Link>

      <h1>hello</h1>
      <Outlet />
    </div>
  );
}
