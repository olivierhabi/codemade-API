import React from "react";
import AuthNavbar from "./AuthNavBar";
import Envelope from "../img/envelope.svg";
import Padlock from "../img/padlock.svg";
import bloglarge04 from "../img/blog-large-04.jpg";
import SparkWhite from "../img/spark-white.svg";

const Footer = () => {
  return (
    <div class="footer-1">
      <div class="footer-1-top">
        <div class="main-container">
          <div class="footer-1-top-row">
            <a href="../../index.htm" class="footer-1-logo w-inline-block">
              <img src={SparkWhite} alt="" />
            </a>
            <a
              href="javascript:if(confirm('https://webflow.com/templates/html/spark-ui-kit-website-template\n\nThis file was not retrieved because it was filtered out by your project settings.\n\nWould you like to open it from the server?'))window.location='https://webflow.com/templates/html/spark-ui-kit-website-template'"
              target="_blank"
              class="button w-inline-block"
            >
              <div>Purchase Spark</div>
            </a>
          </div>
        </div>
      </div>
      <div class="main-container">
        <div class="w-layout-grid footer-1-grid">
          <div class="container-small narrow">
            <h6>About Us</h6>
            <div>
              A supporting paragraph that reinforces the major point expressed
              above, while saying something unique of its own.
            </div>
          </div>
          <div class="container-small narrow">
            <div class="w-layout-grid footer-1-menus-grid">
              <div class="w-layout-grid menu-grid-vertical">
                <a href="../../index.htm" class="hover-link text-white">
                  Tour
                </a>
                <a
                  href="../../index.htm#Landing-Pages"
                  class="hover-link text-white"
                >
                  Landings
                </a>
                <a
                  href="../../index.htm#Company-Pages"
                  class="hover-link text-white"
                >
                  Company
                </a>
                <a
                  href="../../index.htm#Pricing-Pages"
                  class="hover-link text-white"
                >
                  Pricing
                </a>
                <a
                  href="../../index.htm#Blog-Pages"
                  class="hover-link text-white"
                >
                  Blog
                </a>
                <a
                  href="../../index.htm#Account-Pages"
                  class="hover-link text-white"
                >
                  Account
                </a>
              </div>
              <div class="w-layout-grid menu-grid-vertical">
                <a
                  href="../../index.htm#Utility-Pages"
                  class="hover-link text-white"
                >
                  Utility
                </a>
                <a
                  href="../../template/style-guide/index.htm"
                  class="hover-link text-white"
                >
                  Style Guide
                </a>
                <a
                  href="../../template/licensing/index.htm"
                  class="hover-link text-white"
                >
                  Licenses
                </a>
                <a
                  href="../../template/getting-started/index.htm"
                  class="hover-link text-white"
                >
                  Getting Started
                </a>
                <a
                  href="../../template/changelog/index.htm"
                  class="hover-link text-white"
                >
                  Changelog
                </a>
              </div>
            </div>
          </div>
          <div id="w-node-75653105ceeb-3105cec1" class="boxed no-padding">
            <div class="list-grid-vertical no-gaps">
              <a
                href="../../template/style-guide/index.htm"
                class="list-grid-link w-inline-block"
              >
                <div class="icon-horizontal">
                  <img
                    src="../../../assets.website-files.com/5e852ac37e716f0238af30a3/5e853665c71842c35bdc5d59_application-design-grid-layout.svg"
                    alt=""
                  />
                  <div class="icon-horizontal-heading">View Style Guide</div>
                </div>
                <img
                  src="../../../assets.website-files.com/5e852ac37e716f0238af30a3/5e85350952b0760dcd10a5ba_icon-chevron-right.svg"
                  alt=""
                  class="list-grid-link-arrow"
                />
              </a>
              <a
                href="../../template/getting-started/index.htm"
                class="list-grid-link w-inline-block"
              >
                <div class="icon-horizontal">
                  <img
                    src="../../../assets.website-files.com/5e852ac37e716f0238af30a3/5e853665f0055b6c8ca9affc_code-coding-script.svg"
                    alt=""
                  />
                  <div class="icon-horizontal-heading">Getting Started</div>
                </div>
                <img
                  src="../../../assets.website-files.com/5e852ac37e716f0238af30a3/5e85350952b0760dcd10a5ba_icon-chevron-right.svg"
                  alt=""
                  class="list-grid-link-arrow"
                />
              </a>
              <a
                href="javascript:if(confirm('https://disqus.com/home/discussion/templatemarketplace/spark_ui_kit_html5_responsive_website_template/\n\nThis file was not retrieved because it was filtered out by your project settings.\n\nWould you like to open it from the server?'))window.location='https://disqus.com/home/discussion/templatemarketplace/spark_ui_kit_html5_responsive_website_template/'"
                target="_blank"
                class="list-grid-link no-border w-inline-block"
              >
                <div class="icon-horizontal">
                  <img
                    src="../../../assets.website-files.com/5e852ac37e716f0238af30a3/5e853667c71842813bdc5d5e_screen-pc-smart-phone-iphone.svg"
                    alt=""
                  />
                  <div class="icon-horizontal-heading">
                    Get Customer Support
                  </div>
                </div>
                <img
                  src="../../../assets.website-files.com/5e852ac37e716f0238af30a3/5e85350952b0760dcd10a5ba_icon-chevron-right.svg"
                  alt=""
                  class="list-grid-link-arrow"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="footer-1-bottom-row">
          <a
            href="../../template/licensing/index.htm"
            class="row-link text-white"
          >
            Licenses
          </a>
          <a
            href="../../template/changelog/index.htm"
            class="row-link text-white"
          >
            Changelog
          </a>
          <div>
            © Copyright
            <a
              href="javascript:if(confirm('https://www.webflow.com/\n\nThis file was not retrieved because it was filtered out by your project settings.\n\nWould you like to open it from the server?'))window.location='https://www.webflow.com/'"
              target="_blank"
              class="text-white"
            >
              Architect Academy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
