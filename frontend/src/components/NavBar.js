import React from "react";
import SparkDark from "../img/spark-dark.svg";
import IconDropdownArrow from "../img/icon-dropdown-arrow.svg";
import IconSearch from "../img/icon-search.svg";
import IconX from "../img/icon-x.svg";
import IconMenu from "../img/icon-menu.svg";

const NavBar = () => {
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
                  Tour
                </a>
                <div data-delay="200" data-hover="" class="dropdown w-dropdown">
                  <div class="nav-link w-dropdown-toggle">
                    <div>Pages</div>
                    <img src={IconDropdownArrow} alt="" class="dropdown-icon" />
                  </div>
                </div>
                <div data-delay="200" data-hover="" class="dropdown w-dropdown">
                  <div class="nav-link w-dropdown-toggle">
                    <div>Sections</div>
                    <img src={IconDropdownArrow} alt="" class="dropdown-icon" />
                  </div>
                </div>
                <div data-delay="200" data-hover="" class="dropdown w-dropdown">
                  <div class="nav-link w-dropdown-toggle">
                    <div>Template</div>
                    <img src={IconDropdownArrow} alt="" class="dropdown-icon" />
                  </div>
                </div>
              </nav>
            </div>
            <div class="navbar-right-contents">
              <div class="navbar-functions">
                <a
                  href="javascript:if(confirm('https://webflow.com/templates/html/spark-ui-kit-website-template\n\nThis file was not retrieved because it was filtered out by your project settings.\n\nWould you like to open it from the server?'))window.location='https://webflow.com/templates/html/spark-ui-kit-website-template'"
                  target="_blank"
                  class="button w-inline-block"
                >
                  <div>Purchase Spark</div>
                </a>
                <a href="../index.htm#" class="search-link w-inline-block">
                  <img src={IconSearch} alt="" class="search-link-icon" />
                  <div>Search</div>
                </a>
              </div>
              <div class="menu-button w-nav-button">
                <img src={IconMenu} alt="" class="menu-button-image" />
                <img src={IconX} alt="" class="menu-button-close-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
