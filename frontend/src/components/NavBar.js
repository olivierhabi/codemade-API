import React, { useEffect } from "react";
import SparkDark from "../img/spark-dark.svg";
import IconDropdownArrow from "../img/icon-dropdown-arrow.svg";
import IconSearch from "../img/icon-search.svg";
import IconX from "../img/icon-x.svg";
import IconMenu from "../img/icon-menu.svg";
import getToken from "./helpers/jwt";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const Button = () => {
    const token = getToken();

    if (!token) {
      return (
        <>
          <NavLink to="/signup" exact={true}>
            <a target="_blank" class="button w-inline-block">
              <div>Register</div>
            </a>
          </NavLink>
          <NavLink to="/signin" exact={true}>
            <a target="_blank" class="button w-inline-block">
              <div>Login</div>
            </a>
          </NavLink>
        </>
      );
    }
    return (
      <>
        <a target="_blank" class="button w-inline-block">
          <div>Logout</div>
        </a>
      </>
    );
  };

  return (
    <div class="navbar-container sticky-top bg-white">
      <div class="main-container">
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="400"
          role="banner"
          class="navbar w-nav"
        >
          <div class="navbar-justify-between">
            <div>
              <a href="#" class="brand w-nav-brand">
                <img src={SparkDark} alt="" />
              </a>
              <nav
                role="navigation"
                class="nav-menu nav-menu-left-aligned w-nav-menu"
              >
                <a href="#" class="nav-link w-nav-link">
                  Pricing
                </a>
                <a href="#" class="nav-link w-nav-link">
                  Courses
                </a>
                <a href="#" class="nav-link w-nav-link">
                  Career
                </a>

                <a href="#" class="nav-link w-nav-link">
                  Blog
                </a>
                <a href="#" class="nav-link w-nav-link">
                  Contact
                </a>
              </nav>
            </div>
            <div class="navbar-right-contents">
              <div class="navbar-functions">
                <Button />
              </div>
              <div class="menu-button w-nav-button">
                <img
                  src="/codemade/img/icon-menu.svg"
                  alt=""
                  class="menu-button-image"
                />
                <img
                  src="/codemade/img/icon-x.svg"
                  alt=""
                  class="menu-button-close-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
