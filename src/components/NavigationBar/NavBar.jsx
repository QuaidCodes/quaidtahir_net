import {Link, Outlet} from 'react-router-dom';

import "./NavBar.css";

function NavBar() {
    return <nav>
        <ul className="navBar">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Outlet />
        </ul>
    </nav>
}

export default NavBar;