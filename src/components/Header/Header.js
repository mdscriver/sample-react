import React from "react"
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Navbar from 'react-bootstrap/Navbar'

function Header() {
    const location = useLocation();
    return (

        <nav
            className="navbar navbar-expand-lg navbar-dark"
        // style="background-color: #454253;"
        >
            <a className="navbar-brand" href="/">Grant Scriver</a>
            {/* <!--Button for responsive design--> */}
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <!--This is where the Navbar is encoded--> */}
            <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/">About</a> */}
                        <Link
                            to="/"
                            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        {/* <a class="nav-link" href="/portfolio">Portfolio</a> */}
                        <Link
                            to="/portfolio"
                            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                        </Link>

                    </li>
                    <li className="nav-item">
                        {/* <a class="nav-link" href="/contact">Contact</a> */}
                        <Link
                            to="/contact"
                            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
                        </Link>

                    </li>
                </ul>
            </div >
        </nav >


    );
}

export default Header;