import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <div>
            <Link to="/home">Home</Link><br /><br />
            <Link to="/about">About</Link><br/><br/>
            <Link to="contact">Contact</Link>
        </div>
    );
}

export default Nav;