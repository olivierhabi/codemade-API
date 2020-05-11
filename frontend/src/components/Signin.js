import React from "react";
import AuthNavbar from "./AuthNavBar";
import Envelope from "../img/envelope.svg";
import Padlock from "../img/padlock.svg";

const Signin = () => {
  return (
    <>
      <AuthNavbar />
      <div class="account-page-content">
        <div class="main-container">
          <div class="container-small align-center text-center">
            <div class="account-title">
              <h1>Sign In</h1>
              <div class="text-large">Enter your account credentials</div>
            </div>
            <div class="form-block w-form">
              <form
                id="wf-form-Sign-In-Form"
                name="wf-form-Sign-In-Form"
                data-name="Sign In Form"
                class="form-grid-vertical"
              >
                <div class="icon-form-input">
                  <img src={Envelope} alt="" class="icon-form-input-image" />
                  <input
                    type="email"
                    class="form-input-unstyled w-input"
                    maxlength="256"
                    name="Sign-Up-Email"
                    data-name="Sign Up Email"
                    placeholder="Email Address"
                    id="Sign-Up-Email"
                    required=""
                  />
                </div>
                <div class="icon-form-input">
                  <img src={Padlock} alt="" class="icon-form-input-image" />
                  <input
                    type="password"
                    class="form-input-unstyled w-input"
                    maxlength="256"
                    name="Sign-Up-Password"
                    data-name="Sign Up Password"
                    placeholder="Password"
                    id="Sign-Up-Password"
                    required=""
                  />
                </div>
                <input
                  type="submit"
                  value="Sign In"
                  data-wait="Please wait..."
                  class="button w-button"
                />
                <div class="text-small text-center">
                  <div>
                    Forgotten your password?
                    <a href="../forgot-password/index.htm">Reset here</a>
                  </div>
                </div>
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

export default Signin;
