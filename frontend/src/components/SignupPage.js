import React from "react";
import IconUp from "../img/icon-chevron-up.svg";
import LandscapeHero from "../img/landscape-hero-04.jpg";
import iconChevronRight from "../img/icon-chevron-right.svg";
import AuthNavbar from "./AuthNavBar";
import Envelope from "../img/envelope.svg";
import Padlock from "../img/padlock.svg";
import ApplicationDesignGridLayout from "../img/application-design-grid-layout.svg";
import ScreenpcSmartPhoneIphone from "../img/screen-pc-smart-phone-iphone.svg";
import userChatTalk from "../img/user-chat-talk.svg";

const SignupPage = () => {
  return (
    <>
      {/* <AuthNavbar /> */}
      <div class="account-page-content">
        <div class="main-container">
          <div class="w-layout-grid grid-halves">
            <div class="container align-center">
              <div class="boxed">
                <div class="container align-center">
                  <div class="container-small align-center text-center">
                    <div class="account-title">
                      <h1>Create Account</h1>
                      <div class="text-large">
                        Complete the form below to get started.
                      </div>
                    </div>
                    <div class="form-block w-form">
                      <form
                        id="wf-form-Sign-Up-Form"
                        name="wf-form-Sign-Up-Form"
                        data-name="Sign Up Form"
                        class="form-grid-vertical"
                      >
                        <div class="icon-form-input">
                          <img
                            src={Envelope}
                            alt=""
                            class="icon-form-input-image"
                          />
                          <input
                            type="email"
                            class="form-input-unstyled w-input"
                            maxlength="256"
                            name="Sign-Up-Email-2"
                            data-name="Sign Up Email 2"
                            placeholder="Email Address"
                            id="Sign-Up-Email-2"
                            required=""
                          />
                        </div>
                        <div class="icon-form-input">
                          <img
                            src={Padlock}
                            alt=""
                            class="icon-form-input-image"
                          />
                          <input
                            type="password"
                            class="form-input-unstyled w-input"
                            maxlength="256"
                            name="Sign-Up-Password-2"
                            data-name="Sign Up Password 2"
                            placeholder="Password"
                            id="Sign-Up-Password-2"
                            required=""
                          />
                        </div>
                        <div class="icon-form-input">
                          <img
                            src={Padlock}
                            alt=""
                            class="icon-form-input-image"
                          />
                          <input
                            type="password"
                            class="form-input-unstyled w-input"
                            maxlength="256"
                            name="Sign-Up-Password-Confirm-2"
                            data-name="Sign Up Password Confirm 2"
                            placeholder="Confirm Password"
                            id="Sign-Up-Password-Confirm-2"
                            required=""
                          />
                        </div>
                        <label class="w-checkbox selectable-field">
                          <div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                          <input
                            type="checkbox"
                            id="Terms-Agree"
                            name="Unchecked"
                            data-name="Unchecked"
                            id="check-box"
                          />
                          <span
                            for="Unchecked"
                            class="selectable-label w-form-label"
                          >
                            I agree to the
                            <a href="/terms" class="text-gray-1">
                              Terms &amp; Conditions
                            </a>
                          </span>
                        </label>
                        <input
                          type="submit"
                          value="Sign Up"
                          data-wait="Please wait..."
                          class="button w-button"
                        />
                        <div class="text-small text-center">
                          <div>
                            Already have an account?
                            <a href="../sign-in/index.htm">Sign In</a>
                          </div>
                        </div>
                      </form>
                      <div class="form-success w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="form-error w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container align-center">
              <div class="w-layout-grid icon-circle-horizontal-grid-vertical">
                <div class="icon-circle-horizontal">
                  <div class="icon-circle bg-primary-2">
                    <img src={ApplicationDesignGridLayout} alt="" />
                  </div>
                  <div class="icon-circle-horizontal-content">
                    <h5>Modular UI Kit</h5>
                    <div>
                      Volutpat egestas nibh rhoncus mauris semper. Quam nec
                      consectetur est sed lobortis orci ridiculus.
                    </div>
                  </div>
                </div>
                <div class="icon-circle-horizontal">
                  <div class="icon-circle bg-primary-2">
                    <img src={ScreenpcSmartPhoneIphone} alt="" />
                  </div>
                  <div class="icon-circle-horizontal-content">
                    <h5>CMS Integration</h5>
                    <div>
                      Et, pretium laoreet nullam est. Maecenas hendrerit
                      scelerisque velit volutpat arcu eu. Pellentesque eget
                      aliquet.
                    </div>
                  </div>
                </div>
                <div class="icon-circle-horizontal">
                  <div class="icon-circle bg-primary-2">
                    <img src={userChatTalk} alt="" />
                  </div>
                  <div class="icon-circle-horizontal-content">
                    <h5>Premium Support</h5>
                    <div>
                      Lectus tincidunt sem donec quam facilisis. Vel neque odio
                      mauris nec mi diam. Elit quis sed eu mauris habitasse sit
                      dignissim.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
