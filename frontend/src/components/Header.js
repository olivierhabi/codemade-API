import React from "react";
import IconUp from "../img/icon-chevron-up.svg";
import LandscapeHero from "../img/landscape-hero-04.jpg";
import iconChevronRight from "../img/icon-chevron-right.svg";

const Header = () => {
  return (
    <div class="hero-section">
      <img
        src={LandscapeHero}
        sizes="100vw"
        alt=""
        class="background-image hero-section-background"
      />
      <div class="container-large">
        <div class="boxed increased-vertical-padding square-left">
          <div class="container align-center">
            <h5 class="text-primary-1">Architect Academy</h5>
            <h1 class="display-heading-2">
              Create beautiful pages in moments with Spark.
            </h1>
            <p class="text-large">
              Combine sections from a range of categories to easily assemble
              pages that meet the needs of your growing business.
            </p>
            <div class="w-layout-grid rounded-links-grid-vertical">
              <a href="#" class="boxed pill-link-box w-inline-block">
                <div>View Style Guide</div>
                <img src={iconChevronRight} alt="" />
              </a>
              <a class="boxed pill-link-box w-inline-block">
                <div>Explore Landing Pages</div>
                <img src={iconChevronRight} alt="" />
              </a>
              <a href="#" class="boxed pill-link-box w-inline-block">
                <div>Contact Support</div>
                <img src={iconChevronRight} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
