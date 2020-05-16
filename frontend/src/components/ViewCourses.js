import React from "react";
import Image from "../img/blog-large-04.jpg";
import ArrowRight from "../img/icon-arrow-right.svg";

const ViewCourses = () => {
  return (
    <>
      <div class="main-container">
        <h1 class="display-heading-2">Available courses.</h1>
        <div class="text-large">
          All Available courses on Architect Academy.
        </div>
      </div>
      <div class="section bg-gray-4">
        <div class="main-container">
          <div class="w-layout-grid color-link-box-grid">
            <div class="container-small align-center">
              <div class="color-link-box bg-primary-1">
                <div class="color-link-box-card shadow">
                  <img src={Image} alt="" class="rounded-top" />
                  <div class="boxed square-top">
                    <h6 class="text-primary-1">Insurance for</h6>
                    <h4 class="large-heading color-link-box-heading">
                      Couples
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
                  <div class="text-white">View Style Guide</div>
                  <img src={ArrowRight} alt="" class="link-arrow" />
                </a>
              </div>
            </div>
            <div class="container-small align-center">
              <div class="color-link-box bg-primary-2">
                <div class="color-link-box-card shadow">
                  <img src={Image} alt="" class="rounded-top" />
                  <div class="boxed square-top">
                    <h6 class="text-primary-2">Peace of Mind</h6>
                    <h4 class="large-heading color-link-box-heading">
                      Families
                    </h4>
                    <div>
                      Habitant scelerisque eu commodo amet, sollicitudin mi.
                      Viverra netus nullam tempor fringilla molestie.
                    </div>
                  </div>
                </div>
                <a
                  href="../../blog/blog-1/index.htm"
                  class="link-with-arrow w-inline-block"
                >
                  <div class="text-white">See Blog</div>
                  <img src={ArrowRight} alt="" class="link-arrow" />
                </a>
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
                  href="../../template/getting-started/index.htm"
                  class="link-with-arrow w-inline-block"
                >
                  <div class="text-white">Getting Started</div>
                  <img src={ArrowRight} alt="" class="link-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCourses;
