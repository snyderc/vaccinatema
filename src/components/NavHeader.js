
import React from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';

const NavHeader = () => {
  const location = useLocation();
  const history = useHistory();

  const renderNavClass = () => {
    // if desktop
    return "nav nav-pills pull-right";

    // if mobile
    // return "nav nav-pills pull-right";

  };

  const renderLinkClass = (nav) => {
    const path = nav === "home" ? "/" : nav;
    if (location.pathname.match(`${path}$`)) {
      return "active";
    } else {
      return "";
    }
  };

  return(
    <div className="header">
      <div className="logo-container" onClick={() => history.push("/")}>
        <h3 className="text-muted"><img src={"ma_logo.png"} alt="MA logo"/>Vaccinate MA</h3>
      </div>
      <div className={renderNavClass()} id="navbarNav">
        <ul className="nav nav-pills pull-right">
          <li><Link className={renderLinkClass("home")} to="/">Home</Link></li>
          <li><Link className={renderLinkClass("eligibility")} to="/eligibility">Eligibility</Link></li>
          <li><Link className={renderLinkClass("sites")} to="/sites">Vaccination Sites</Link></li>
          <li><Link className={renderLinkClass("faq")} to="/faq" >FAQ</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavHeader;
