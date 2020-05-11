import React from "react";
import AuthNavbar from "./AuthNavBar";
import Envelope from "../img/envelope.svg";
import Padlock from "../img/padlock.svg";
import bloglarge04 from "../img/blog-large-04.jpg";
import blogthumbnail01 from "../img/blog-thumbnail-01.jpg";

const Blog = () => {
  return (
    <>
      <div class="section featured-blog-section bg-gray-3">
        <div class="main-container">
          <div class="featured-article-container">
            <div class="w-dyn-list">
              <div class="w-dyn-items">
                <div class="w-dyn-item">
                  <a
                    href="../../post/supercharge-your-brainstorming-sessions-outdoors/index.htm"
                    class="featured-article w-inline-block"
                  >
                    <img src={bloglarge04} alt="" class="rounded-large" />
                    <div class="featured-article-title">
                      <div class="container">
                        <div class="boxed shadow">
                          <h1 class="featured-article-heading">
                            Supercharge your brainstorming sessions outdoors
                          </h1>
                          <div class="article-meta">
                            <div
                              //       style="
                              // color: hsla(0, 0%, 100%, 1);
                              // background-color: #eaa235;
                              // back
                              //   "
                              class="badge article-meta-badge"
                              id="badge"
                            >
                              <div>Business</div>
                            </div>
                            <div>April 10, 2020</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="main-container">
          <div class="section-title cms-section-title text-center">
            <h2 class="large-heading section-title">
              Insight and news from our team.
            </h2>
          </div>
          <div class="w-dyn-list">
            <div class="articles-grid-thirds w-dyn-items">
              <div class="w-dyn-item">
                <div class="article-grid-item">
                  <a
                    href="../../post/presenting-your-product-in-the-era-of-unboxing/index.htm"
                    class="article-thumbnail w-inline-block"
                  >
                    <img src={blogthumbnail01} alt="" />
                  </a>
                  <div class="article-meta article-grid-meta">
                    {/* <a
                      style="background-color: #eaa235;"
                      href="../../blog-categories/business/index.htm"
                      class="badge article-meta-badge w-inline-block"
                    >
                      <div style="color: hsla(0, 0%, 100%, 1);">Business</div> */}
                    {/* </a> */}
                    <div>April 10, 2020</div>
                  </div>
                  <div>
                    <a
                      href="../../post/presenting-your-product-in-the-era-of-unboxing/index.htm"
                      class="article-grid-heading w-inline-block"
                    >
                      <h5 class="article-grid-heading">
                        Presenting your product in the era of unboxing
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-dyn-item">
                <div class="article-grid-item">
                  <a
                    href="../../post/10-ways-to-increase-traction-on-your-launch-campaign/index.htm"
                    class="article-thumbnail w-inline-block"
                  >
                    <img src={blogthumbnail01} alt="" />
                  </a>
                  <div class="article-meta article-grid-meta">
                    {/* <a
                      style="background-color: #e14817;"
                      href="../../blog-categories/insight/index.htm"
                      class="badge article-meta-badge w-inline-block"
                    >
                      <div style="color: hsla(0, 0%, 100%, 1);">Insight</div>
                    </a> */}
                    <div>April 10, 2020</div>
                  </div>
                  <div>
                    <a
                      href="../../post/10-ways-to-increase-traction-on-your-launch-campaign/index.htm"
                      class="article-grid-heading w-inline-block"
                    >
                      <h5 class="article-grid-heading">
                        10 ways to increase traction on your launch campaign
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-dyn-item">
                <div class="article-grid-item">
                  <a
                    href="../../post/brand-optics-and-what-it-means-for-your-business/index.htm"
                    class="article-thumbnail w-inline-block"
                  >
                    <img src={blogthumbnail01} alt="" />
                  </a>
                  <div class="article-meta article-grid-meta">
                    {/* <a
                      style="background-color: #81a094;"
                      href="../../blog-categories/advice/index.htm"
                      class="badge article-meta-badge w-inline-block"
                    >
                      <div style="color: hsla(0, 0%, 100%, 1);">Advice</div>
                    </a> */}
                    <div>April 10, 2020</div>
                  </div>
                  <div>
                    <a
                      href="../../post/brand-optics-and-what-it-means-for-your-business/index.htm"
                      class="article-grid-heading w-inline-block"
                    >
                      <h5 class="article-grid-heading">
                        Brand Optics and what it means for your business
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-dyn-item">
                <div class="article-grid-item">
                  <a
                    href="../../post/perfecting-your-outdoor-workout-routine/index.htm"
                    class="article-thumbnail w-inline-block"
                  >
                    <img src={blogthumbnail01} alt="" />
                  </a>
                  <div class="article-meta article-grid-meta">
                    {/* <a
                      style="background-color: #e14817;"
                      href="../../blog-categories/insight/index.htm"
                      class="badge article-meta-badge w-inline-block"
                    >
                      <div style="color: hsla(0, 0%, 100%, 1);">Insight</div>
                    </a> */}
                    <div>April 10, 2020</div>
                  </div>
                  <div>
                    <a
                      href="../../post/perfecting-your-outdoor-workout-routine/index.htm"
                      class="article-grid-heading w-inline-block"
                    >
                      <h5 class="article-grid-heading">
                        Perfecting your outdoor workout routine
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-dyn-item">
                <div class="article-grid-item">
                  <a
                    href="../../post/how-can-ai-deliver-better-at-home-care/index.htm"
                    class="article-thumbnail w-inline-block"
                  >
                    <img src={blogthumbnail01} alt="" />
                  </a>
                  <div class="article-meta article-grid-meta">
                    {/* <a
                      style="background-color: #81a094;"
                      href="../../blog-categories/advice/index.htm"
                      class="badge article-meta-badge w-inline-block"
                    >
                      <div style="color: hsla(0, 0%, 100%, 1);">Advice</div>
                    </a> */}
                    <div>April 10, 2020</div>
                  </div>
                  <div>
                    <a
                      href="../../post/how-can-ai-deliver-better-at-home-care/index.htm"
                      class="article-grid-heading w-inline-block"
                    >
                      <h5 class="article-grid-heading">
                        How can AI deliver better at-home health care
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-dyn-item">
                <div class="article-grid-item">
                  <a
                    href="../../post/instituting-a-culture-of-positive-psychology/index.htm"
                    class="article-thumbnail w-inline-block"
                  >
                    <img src={blogthumbnail01} alt="" />
                  </a>
                  <div class="article-meta article-grid-meta">
                    {/* <a
                      style="background-color: #eaa235;"
                      href="../../blog-categories/business/index.htm"
                      class="badge article-meta-badge w-inline-block"
                    >
                      <div style="color: hsla(0, 0%, 100%, 1);">Business</div>
                    </a> */}
                    <div>April 10, 2020</div>
                  </div>
                  <div>
                    <a
                      href="../../post/instituting-a-culture-of-positive-psychology/index.htm"
                      class="article-grid-heading w-inline-block"
                    >
                      <h5 class="article-grid-heading">
                        Instituting a culture of positive psychology
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-dyn-item">
                <div class="article-grid-item">
                  <a
                    href="../../post/working-from-home-tips-and-tricks/index.htm"
                    class="article-thumbnail w-inline-block"
                  >
                    <img src={blogthumbnail01} alt="" />
                  </a>
                  <div class="article-meta article-grid-meta">
                    {/* <a
                      style="background-color: #eaa235;"
                      href="../../blog-categories/business/index.htm"
                      class="badge article-meta-badge w-inline-block"
                    >
                      <div style="color: hsla(0, 0%, 100%, 1);">Business</div>
                    </a> */}
                    <div>April 10, 2020</div>
                  </div>
                  <div>
                    <a
                      href="../../post/working-from-home-tips-and-tricks/index.htm"
                      class="article-grid-heading w-inline-block"
                    >
                      <h5 class="article-grid-heading">
                        Working from home tips and tricks
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-dyn-item">
                <div class="article-grid-item">
                  <a
                    href="../../post/getting-out-into-nature-has-never-been-more-important/index.htm"
                    class="article-thumbnail w-inline-block"
                  >
                    <img src={blogthumbnail01} alt="" />
                  </a>
                  <div class="article-meta article-grid-meta">
                    {/* <a
                      style="background-color: #81a094;"
                      href="../../blog-categories/advice/index.htm"
                      class="badge article-meta-badge w-inline-block"
                    >
                      <div style="color: hsla(0, 0%, 100%, 1);">Advice</div>
                    </a> */}
                    <div>April 10, 2020</div>
                  </div>
                  <div>
                    <a
                      href="../../post/getting-out-into-nature-has-never-been-more-important/index.htm"
                      class="article-grid-heading w-inline-block"
                    >
                      <h5 class="article-grid-heading">
                        Getting out into nature has never been more important
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-dyn-item">
                <div class="article-grid-item">
                  <a
                    href="../../post/motivational-podcasts-to-help-with-mental-health-and-productivity/index.htm"
                    class="article-thumbnail w-inline-block"
                  >
                    <img src={blogthumbnail01} alt="" />
                  </a>
                  <div class="article-meta article-grid-meta">
                    {/* <a
                      style="background-color: #e14817;"
                      href="../../blog-categories/insight/index.htm"
                      class="badge article-meta-badge w-inline-block"
                    >
                      <div style="color: hsla(0, 0%, 100%, 1);">Insight</div>
                    </a> */}
                    <div>April 10, 2020</div>
                  </div>
                  <div>
                    <a
                      href="../../post/motivational-podcasts-to-help-with-mental-health-and-productivity/index.htm"
                      class="article-grid-heading w-inline-block"
                    >
                      <h5 class="article-grid-heading">
                        Motivational podcasts to help with mental health and
                        productivity
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-dyn-item">
                <div class="article-grid-item">
                  <a
                    href="../../post/developing-your-product-teams-communication-skills/index.htm"
                    class="article-thumbnail w-inline-block"
                  >
                    <img src={blogthumbnail01} alt="" />
                  </a>
                  <div class="article-meta article-grid-meta">
                    {/* <a
                      style="background-color: #eaa235;"
                      href="../../blog-categories/business/index.htm"
                      class="badge article-meta-badge w-inline-block"
                    >
                      <div style="color: hsla(0, 0%, 100%, 1);">Business</div>
                    </a> */}
                    <div>April 10, 2020</div>
                  </div>
                  <div>
                    <a
                      href="../../post/developing-your-product-teams-communication-skills/index.htm"
                      class="article-grid-heading w-inline-block"
                    >
                      <h5 class="article-grid-heading">
                        Developing your product team&#x27;s communication skills
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section bg-gray-4">
        <div class="main-container">
          <div class="container-large align-center justify-content-center">
            <h5 class="text-primary-1">Keep in the Loop</h5>
            <h4 class="large-heading section-title">
              Implore user action with this attractive form.
            </h4>
          </div>
          <div class="container-large align-center">
            <div class="hero-subscribe-form w-form">
              <form
                id="wf-form-Wide-Subscribe-Form"
                name="wf-form-Wide-Subscribe-Form"
                data-name="Wide Subscribe Form"
              >
                <div class="form-horizontal">
                  <input
                    type="email"
                    class="form-input form-input-large w-input"
                    maxlength="256"
                    name="Email-Address"
                    data-name="Email Address"
                    placeholder="Email Address"
                    id="Email-Address"
                    required=""
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    data-wait="Please wait..."
                    class="button form-horizontal-button button-large w-button"
                  />
                </div>
                <label class="w-checkbox selectable-field align-center">
                  <div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                  {/* <input
                    type="checkbox"
                    id="Terms-Agree"
                    name="Unchecked"
                    data-name="Unchecked"
                    style="opacity: 0; position: absolute; z-index: -1;"
                  /> */}
                  <span for="Unchecked" class="selectable-label w-form-label">
                    I agree to the
                    <a href="../index.htm#" class="text-gray-1">
                      Terms &amp; Conditions
                    </a>
                  </span>
                </label>
              </form>
              <div class="form-success w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="form-error w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
