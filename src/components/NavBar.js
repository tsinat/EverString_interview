import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className='navbar-header'>
                    <Link to='/' className='navbar-brand'>EverString</Link>
              </div>
            </div>
            <div id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item" key={1} >
                     <Link
                         to='/'>
                         Home
                     </Link>
                 </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default NavBar;
