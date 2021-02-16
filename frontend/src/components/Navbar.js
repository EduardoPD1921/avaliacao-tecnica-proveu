import React from 'react'

// Navbar css
import '../css/Navbar.css'

const Navbar = props => {
    return (
    <nav className="teal lighten-3">
        <div class="nav-wrapper">
            <a href="#" class="brand-logo"><img src='./logo.png'></img></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
            </ul>
        </div>
    </nav>     
    )
}

export default Navbar