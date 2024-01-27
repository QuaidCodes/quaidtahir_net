import {Link, Outlet} from 'react-router-dom';

import "./NavBar.css";

function NavBar() {
    return <nav>
        <ul className="navBar">
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/github">Github</Link>
            <Link to="/linkedIn">LinkedIn</Link>
            <Link to="/instagram">Instagram</Link>
            <Outlet />
        </ul>
    </nav>
}

export default NavBar;