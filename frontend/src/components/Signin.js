import React, { useState } from "react";
import AuthNavbar from "./AuthNavBar";
import API from "./API";
import Envelope from "../img/envelope.svg";
import Padlock from "../img/padlock.svg";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();

    API.post("/auth/signin", {
      username,
      password,
    }).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      {/* <AuthNavbar /> */}
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
                class="form-grid-vertical"
                onSubmit={SignIn}
              >
                <div class="icon-form-input">
                  <img src={Envelope} alt="" class="icon-form-input-image" />
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="email"
                    class="form-input-unstyled w-input"
                    maxlength="256"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div class="icon-form-input">
                  <img src={Padlock} alt="" class="icon-form-input-image" />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    class="form-input-unstyled w-input"
                    maxlength="256"
                    placeholder="Password"
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
