import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navstyle = styled.nav`
  background-color: var(--dark-bg);
`;

function Navbar() {
  return (
    <Navstyle className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid align-items-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center ms-lg-5"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-lg-5">
            <NavLink className="nav-link px-lg-5 lead" exact to="/">
              خانه
            </NavLink>
            <NavLink className="nav-link px-lg-5 lead" to="/About">
              درباره
            </NavLink>
            <NavLink className="nav-link px-lg-5 lead" to="/Projects">
              پروژه ها
            </NavLink>
            <NavLink className="nav-link px-lg-5 lead" to="/Contact" >
              تماس
            </NavLink>
          </div>
        </div>
        <NavLink className="navbar-brand text-white-50" to="/">
          amirasadi
        </NavLink>
      </div>
    </Navstyle>
  );
}

export default Navbar;
