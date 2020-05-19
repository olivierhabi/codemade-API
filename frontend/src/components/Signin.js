import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "./Api";
import Envelope from "../img/envelope.svg";
import Padlock from "../img/padlock.svg";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const SignIn = (e) => {
    e.preventDefault();

    API.post("http://localhost:5000/api/auth/signin", {
      username: username,
      password: password,
    }).then(
      (response) => {
        const { token, message } = response.data;
        localStorage.setItem("auth-token", token);
        setMessage(message);
        history.push("/courses");
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
                    type="text"
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
                <Error />
                <div class="text-small text-center">
                  <div>
                    Forgotten your password?
                    <a href="../forgot-password/index.htm">Reset here</a>
                  </div>
                </div>
              </form>
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
