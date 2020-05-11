import React from "react";
import AuthNavbar from "./AuthNavBar";
import Envelope from "../img/envelope.svg";
import Padlock from "../img/padlock.svg";

const ForgotPassword = () => {
  return (
    <>
      <AuthNavbar />
      <div class="account-page-content">
        <div class="main-container">
          <div class="container-small align-center text-center">
            <div class="account-title">
              <h1>Forgot Password</h1>
              <div class="text-large">
                Enter email address to send a reset link
              </div>
            </div>
            <div class="form-block w-form">
              <form
                id="wf-form-Forgot-Password"
                name="wf-form-Forgot-Password"
                data-name="Forgot Password"
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
                <input
                  type="submit"
                  value="Send Reset Link"
                  data-wait="Please wait..."
                  class="button w-button"
                />
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

export default ForgotPassword;
