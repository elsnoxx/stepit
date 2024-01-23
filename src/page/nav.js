// TopNav.js
import '../style/TopNav.css';
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const TopNav = () => {
  const [isLekceOpen, setLekceOpen] = useState(false);

  const toggleLekce = () => {
    setLekceOpen(!isLekceOpen);
  };

  const handleMouseLeave = () => {
    setLekceOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container nav-elements">
          <ul className="nav-elements">
            <li><Link to="/">Home</Link></li>
            <li
              className={`dropdown ${isLekceOpen ? 'open' : ''}`}
              onMouseLeave={handleMouseLeave}
              onClick={toggleLekce}
              >
              <span>Lekce</span>
              {isLekceOpen && (
                <ul>
                  <li><Link to="/tinkercad">Tinkercad</Link></li>
                  <li><Link to="/audacity">Audacity</Link></li>
                  <li><Link to="/construct-3">Construct-3</Link></li>
                  <li><Link to="/wordpress">Wordpress</Link></li>
                  <li><Link to="/python">Python</Link></li>
                  <li><Link to="/roblox">Roblox</Link></li>
                  <li><Link to="/javascript">JavaScript</Link></li>
                  <li><Link to="/wordpress">Wordpress</Link></li>
                  <li><Link to="/youtube">Youtube</Link></li>
                  <li><Link to="/art-of-presentation">Art of Presentation</Link></li>
                  <li><Link to="/html-css">HTML CSS</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/mystat">Mystat</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default TopNav;
