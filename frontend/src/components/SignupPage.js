import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LandscapeHero from "../img/landscape-hero-04.jpg";
import Envelope from "../img/envelope.svg";
import Padlock from "../img/padlock.svg";
import Uppercut from "../img/uppercut.svg";
import Monograma from "../img/monograma.svg";
import Petsky from "../img/petsky.svg";
import API from "../components/Api";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const SignUp = (e) => {
    e.preventDefault();

    API.post("/auth/signup", {
      username: username,
      email: email,
      password: password,
    }).then(
      (response) => {
        const { message } = response.data;
        setMessage(message);
      },
      (error) => {
        if (!error.response) {
          const networkError = "Error: network error";
          setMessage(networkError);
        } else {
          const { message } = error.response.data;
          setMessage(message);
        }
      }
    );
  };

  const Error = () => {
    if (!message) {
      return null;
    }
    return (
      <div>
        <div class="text-small text-center">
          <a href="#">{message}</a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div class="hero-section-2 bg-gray-3">
        <div class="hero-section-2-contents">
          <div class="hero-section-2-text-container">
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
                  onSubmit={SignUp}
                  class="form-grid-vertical"
                >
                  <div class="icon-form-input">
                    <img src={Envelope} alt="" class="icon-form-input-image" />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      class="form-input-unstyled w-input"
                      maxlength="256"
                      placeholder="Username"
                      required=""
                    />
                  </div>
                  <div class="icon-form-input">
                    <img src={Envelope} alt="" class="icon-form-input-image" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                    <img src={Padlock} alt="" class="icon-form-input-image" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      class="form-input-unstyled w-input"
                      maxlength="256"
                      name="Sign-Up-Password-2"
                      data-name="Sign Up Password 2"
                      placeholder="Password"
                      id="Sign-Up-Password-2"
                      required=""
                    />
                  </div>
                  <Error />
                  <input
                    type="submit"
                    value="Sign Up"
                    data-wait="Please wait..."
                    class="button w-button"
                  />
                  <div class="text-small text-center">
                    <div>
                      Already have an account?
                      <NavLink to="/signin" exact={true}>
                        <a>Sign In</a>
                      </NavLink>
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
          <div class="hero-section-2-logos-container">
            <div class="logos-horizontal-container">
              <h6 class="logos-horizontal-heading">Used by:</h6>
              <div class="logos-horizontal">
                <img src={Petsky} alt="" class="logos-horizontal-item" />
                <img src={Monograma} alt="" class="logos-horizontal-item" />
                <img src={Uppercut} alt="" class="logos-horizontal-item" />
              </div>
            </div>
          </div>
        </div>
        <img
          src={LandscapeHero}
          sizes="(max-width: 479px) 84vw, (max-width: 767px) 400px, 100vw"
          id="w-node-90c46f2c8e18-2c3ffe6f"
          alt=""
          class="hero-section-2-image rounded-top-left-large"
        />
      </div>
    </>
  );
};

export default SignupPage;
