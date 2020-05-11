import React from "react";
import SparkDark from "../img/spark-dark.svg";
import Phone2Small from "../img/phone-2-small.svg";
import IconEnvelope from "../img/icon-envelope.svg";

const AuthNavBar = () => {
  return (
    <div class="navbar-container">
      <div class="main-container">
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="400"
          class="navbar w-nav"
        >
          <div class="navbar-justify-between">
            <div class="navbar-left-contents">
              <a href="../../index.htm" class="brand w-nav-brand">
                <img src={SparkDark} alt="" />
              </a>
              <div class="navbar-functions navbar-functions-left">
                <a href="../index.htm#" class="navbar-icon-link w-inline-block">
                  <img
                    src={Phone2Small}
                    alt=""
                    class="navbar-icon-link-image"
                  />
                  <div>+250 781 894 139</div>
                </a>
                <a
                  href="mailto:info@architectacademy.io"
                  class="navbar-icon-link w-inline-block"
                >
                  <img
                    src={IconEnvelope}
                    alt=""
                    class="navbar-icon-link-image"
                  />
                  <div>info@architectacademy.io</div>
                </a>
              </div>
            </div>
            <div class="navbar-right-contents">
              <nav
                role="navigation"
                class="nav-menu nav-menu-right-aligned w-nav-menu"
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
              <div class="menu-button w-nav-button">
                <img
                  src="../../../assets.website-files.com/5e852ac37e716f0238af30a3/5e853509c718427173dc59fe_icon-menu.svg"
                  alt=""
                  class="menu-button-image"
                />
                <img
                  src="../../../assets.website-files.com/5e852ac37e716f0238af30a3/5e853509c7184218cddc59ff_icon-x.svg"
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

export default AuthNavBar;
