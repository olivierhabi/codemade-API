import React, { useState } from "react";
import Envelope from "../img/envelope.svg";
import API from "../components/Api";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const CreateCourse = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("auth-token");
    const options = {
      headers: { Authorization: token },
    };

    API.post(
      "/course",
      {
        title: title,
        body: body,
      },
      options
    ).then(
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
      <div class="account-page-content">
        <div class="main-container">
          <div class="container-small align-center text-center">
            <div class="account-title">
              <h1>Create Course</h1>
              <div class="text-large">
                Complete the form below to create Course.
              </div>
            </div>
            <div class="form-block w-form">
              <form onSubmit={CreateCourse} class="form-grid-vertical">
                <div class="icon-form-input">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    class="form-input-unstyled w-input"
                    placeholder="Title of Course"
                    required=""
                  />
                </div>
                <div class="icon-form-input">
                  <textarea
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    class="form-input-unstyled w-input"
                    placeholder="Body of Course"
                    required=""
                  />
                </div>
                <div class="icon-form-input">
                  <input
                    type="file"
                    class="form-input-unstyled w-input"
                    maxlength="256"
                    name="Sign-Up-Password-Confirm"
                    data-name="Sign Up Password Confirm"
                    placeholder="Upload image"
                    id="Sign-Up-Password-Confirm"
                    required=""
                  />
                </div>
                <Error />
                <input
                  type="submit"
                  value="Create Course"
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

export default HomePage;
