import React, { useState, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import DropdownGet from "./DropdownGet";
import DropdownDonor from "./DropdownDonor";
import SignUpButton from "./SignUpButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faComment } from "@fortawesome/free-solid-svg-icons";
import { LoggedInContext } from "../App";
import { UserInContext } from "../App";
import { ThemeContext } from "../context";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const [userInfo, setUserInfo] = React.useContext(UserInContext);

  const [user, setUser] = useState("");
  const usernameRef = useRef();

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [dropdownDoner, setDropdownDoner] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(false);
  };

  const onMouseEnterDoner = () => {
    window.innerWidth < 960 ? setDropdownDoner(false) : setDropdownDoner(true);
  };
  const onMouseLeaveDoner = () => {
    window.innerWidth < 960 ? setDropdownDoner(false) : setDropdownDoner(false);
  };

  return (
    <>
      <nav
        className="navbar"
        style={{
          background: darkMode && "#595959",
        }}
      >
        <NavLink to="/" className="navBar-logo">
          <img
            src="/images/logo/logo_day.png"
            alt="logo"
            height="80"
            width="150"
            className="navBar-logo"
          />
        </NavLink>

        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon
            icon={faBars}
            className={click ? "fa-times" : "fa-bars"}
          />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="/getfood"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Get Food
              <i className="fas fa-caret-down" />
            </NavLink>
            {dropdown && <DropdownGet />}
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnterDoner}
            onMouseLeave={onMouseLeaveDoner}
          >
            <NavLink to="/post" className="nav-links" onClick={closeMobileMenu}>
              Give Help
              <i className="fas fa-caret-down" />
            </NavLink>
            {dropdownDoner && <DropdownDonor />}
          </li>

          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
          </li>

          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <FontAwesomeIcon icon="fa-regular fa-comment-smile" />
                <FontAwesomeIcon icon={faComment} />
                Hi, {userInfo}
              </li>

              <li className="nav-item">
                <LogoutButton to="/signout" />
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <SignUpButton to="/sign-up" />
              </li>

              <li className="nav-item">
                <LoginButton to="/login" />
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
