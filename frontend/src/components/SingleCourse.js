import React from "react";
import iconCheckSmall from "../img/icon-check-small.svg";
import Image from "../img/blog-large-04.jpg";
import ArrowRight from "../img/icon-arrow-right.svg";
import IconStar from "../img/icon-star.svg";
import IconChevronRight from "../img/icon-chevron-right.svg";

const SingleCourses = () => {
  return (
    <>
      <div class="section bg-gray-4">
        <div class="main-container">
          <div class="w-layout-grid grid-halves">
            <div class="container align-center">
              <h5 class="text-primary-3">List Features</h5>
              <h3 class="display-heading-2">
                Put the spotlight on an individual feature.
              </h3>
              <div class="text-large">
                Volutpat egestas nibh rhoncus mauris semper. Quam nec
                consectetur est sed lobortis orci ridiculus. Vel facilisi nisi
                tortor consequat a viverra lacus, enim, quis.
              </div>
            </div>
            <div class="container-small align-center">
              <div class="color-link-box bg-primary-3">
                <div class="color-link-box-card shadow">
                  <img src={Image} alt="" class="rounded-top" />
                  <div class="boxed square-top">
                    <h6 class="text-primary-3">Cover for</h6>
                    <h4 class="large-heading color-link-box-heading">
                      Business
                    </h4>
                    <div>
                      Habitant scelerisque eu commodo amet, sollicitudin mi.
                      Viverra netus nullam tempor fringilla molestie.
                    </div>
                  </div>
                </div>
                <a
                  href="../../template/style-guide/index.htm"
                  class="link-with-arrow w-inline-block"
                >
                  <div class="text-white">Visit Style Guide</div>
                  <img src={ArrowRight} alt="" class="link-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section bg-gray-4">
        <div class="main-container">
          <h6>Course Modules:</h6>
          <div class="w-layout-grid grid-halves">
            <div class="container-small">
              <div class="boxed no-padding">
                <div class="list-grid-vertical no-gaps">
                  <a
                    href="../../template/style-guide/index.htm"
                    class="list-grid-link w-inline-block"
                  >
                    <div class="icon-horizontal">
                      <div class="icon-horizontal-heading">
                        View Style Guide
                      </div>
                    </div>
                    <img
                      src={IconChevronRight}
                      alt=""
                      class="list-grid-link-arrow"
                    />
                  </a>
                  <a
                    href="../../company/case-studies/index.htm"
                    class="list-grid-link w-inline-block"
                  >
                    <div class="icon-horizontal">
                      <div class="icon-horizontal-heading">
                        View Case Studies
                      </div>
                    </div>
                    <img
                      src={IconChevronRight}
                      alt=""
                      class="list-grid-link-arrow"
                    />
                  </a>
                  <a
                    href="../../company/help-center/index.htm"
                    class="list-grid-link no-border w-inline-block"
                  >
                    <div class="icon-horizontal">
                      <div class="icon-horizontal-heading">
                        Explore Help Center
                      </div>
                    </div>
                    <img
                      src={IconChevronRight}
                      alt=""
                      class="list-grid-link-arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="container-large">
              <h6>This course will cover:</h6>
              <div class="w-layout-grid checklist-grid-halves">
                <div class="list-grid-vertical">
                  <div class="list-grid-item">
                    <div class="check-circle">
                      <img src={iconCheckSmall} alt="" />
                    </div>
                    <div>Modular Architecture</div>
                  </div>
                  <div class="list-grid-item">
                    <div class="check-circle">
                      <img src={iconCheckSmall} alt="" />
                    </div>
                    <div>Clean, Curated Visual Aesthetic</div>
                  </div>
                  <div class="list-grid-item">
                    <div class="check-circle">
                      <img src={iconCheckSmall} alt="" />
                    </div>
                    <div>Friendly Customer Support</div>
                  </div>
                </div>
                <div class="list-grid-vertical">
                  <div class="list-grid-item">
                    <div class="check-circle">
                      <img src={iconCheckSmall} alt="" />
                    </div>
                    <div>Modular Architecture</div>
                  </div>
                  <div class="list-grid-item">
                    <div class="check-circle">
                      <img src={iconCheckSmall} alt="" />
                    </div>
                    <div>Clean, Curated Visual Aesthetic</div>
                  </div>
                  <div class="list-grid-item">
                    <div class="check-circle">
                      <img src={iconCheckSmall} alt="" />
                    </div>
                    <div>Friendly Customer Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section bg-gray-3">
        <div class="main-container">
          <div class="container section-title">
            <h3 class="large-heading">Customer love</h3>
            <div class="text-large">
              We have an average customer rating of 4.97/5
            </div>
          </div>
          <div class="w-layout-grid review-grid-thirds">
            <div class="boxed">
              <div class="stars-row boxed-stars-row">
                <img src={IconStar} alt="" />
                <img src={IconStar} alt="" />
                <img src={IconStar} alt="" />
                <img src={IconStar} alt="" />
                <img src={IconStar} alt="" />
              </div>
              <div class="text-large">
                “I love how simple the online interface is to get all the basic
                things done.”
              </div>
              <div class="rating-author">
                <div class="text-small">Kelly Brimbore</div>
                <div class="text-small text-muted">Newcastle</div>
              </div>
            </div>
            <div class="boxed">
              <div class="stars-row boxed-stars-row">
                <img src={IconStar} alt="" />
                <img src={IconStar} alt="" />
                <img src={IconStar} alt="" />
                <img src={IconStar} alt="" />
                <img src={IconStar} alt="" />
              </div>
              <div class="text-large">
                “They absolutely nailed the look and feel of our website. We
                would use them again for sure.”
              </div>
              <div class="rating-author">
                <div class="text-small">Andrew  Sims</div>
                <div class="text-small text-muted">Broadbeach</div>
              </div>
            </div>
            <div class="boxed">
              <div class="stars-row boxed-stars-row">
                <img src={IconStar} alt="" />
                <img src={IconStar} alt="" />
                <img src={IconStar} alt="" />
                <img src={IconStar} alt="" />
                <img src={IconStar} alt="" />
              </div>
              <div class="text-large">
                “Couldn’t have been happier with my experience - what an
                absolute masterpiece!”
              </div>
              <div class="rating-author">
                <div class="text-small">Angela P.</div>
                <div class="text-small text-muted">Queensland</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourses;
