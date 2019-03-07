import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                <Link className="navbar-brand" to="/note" >Note Manager</Link>
                </div>
                <ul className="nav navbar-nav">
                <li><Link to="/note" >Home</Link></li>
                <li><Link to="/SignUP" >Sign up</Link></li> 
                <li><Link to="/Login" >Login</Link></li> 
                </ul>
            </div>
            </nav>
          <br/>
          <br/>
        </div>
    );
};

export default Header;