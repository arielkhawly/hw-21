import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark navColor">
            <Link className="navbarTitle" to='/'>Google Books</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav main-navbar">
                    <li className="nav-item">
                        <Link to='/saved' className="navLink">Saved Books</Link>
                    </li>
                </ul>
           
            </div>
        </nav>

    )
}

export default Navbar;