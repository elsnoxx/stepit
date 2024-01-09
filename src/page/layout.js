import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
        <li><Link to="/">Home</Link></li>
          <div>
          <li><Link to="/tinkercad">Lekce</Link></li>
            <ul>
              <li><Link to="/tinkercad">Tinkercad</Link></li>
              <li><Link to="/audacity">Audacity</Link></li>
              <li><Link to="/audacity">Construct-3</Link></li>
              <li><Link to="/audacity">Wordpress</Link></li>
              <li><Link to="/audacity">Python</Link></li>
              <li><Link to="/audacity">Roblox</Link></li>
              <li><Link to="/audacity">JavaScript</Link></li>
              <li><Link to="/audacity">Wordpress</Link></li>
              <li><Link to="/audacity">Youtube</Link></li>
              <li><Link to="/audacity">Art of Presentation</Link></li>
              <li><Link to="/audacity">HTML CSS</Link></li>
            </ul>
          </div>
          <li><Link to="/audacity">Mystat</Link></li>
          <li><Link to="/audacity">Kontakt</Link></li>
        </ul>
      </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;