import React from "react";

const CreateModule = () => {
  return (
    <div class="account-page-content">
      <div class="main-container">
        <div class="container-small align-center text-center">
          <div class="account-title">
            <h1>Create Module</h1>
            <div class="text-large">Complete the form below to Module.</div>
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
                  src="../../../assets.website-files.com/5e852ac37e716f0238af30a3/5e853666fa63bc472e808cfa_envelope.svg"
                  alt=""
                  class="icon-form-input-image"
                />
                <input
                  type="email"
                  class="form-input-unstyled w-input"
                  maxlength="256"
                  name="Sign-Up-Email"
                  data-name="Sign Up Email"
                  placeholder="Title of Module"
                  id="Sign-Up-Email"
                  required=""
                />
              </div>
              <div class="icon-form-input">
                <img
                  src="../../../assets.website-files.com/5e852ac37e716f0238af30a3/5e853667516e7a90b04ef6da_padlock.svg"
                  alt=""
                  class="icon-form-input-image"
                />
                <input
                  type="password"
                  class="form-input-unstyled w-input"
                  maxlength="256"
                  name="Sign-Up-Password"
                  data-name="Sign Up Password"
                  placeholder="Body of Module"
                  id="Sign-Up-Password"
                  required=""
                />
              </div>
              <div>
                <label for="Phone-Number-2" class="text-small form-input-label">
                  Select Course
                  <a href="../index.htm#" class="text-danger">
                    *
                  </a>
                  <span class="text-danger"></span>
                </label>
                <div class="select-field">
                  <select
                    id="Preferred-Method"
                    name="Preferred-Method"
                    data-name="Preferred Method"
                    required=""
                    class="select-field-unstyled w-select"
                  >
                    <option value="">Select an option</option>
                    <option value="First">First Course</option>
                    <option value="Second">Second Course</option>
                    <option value="Third">Third Course</option>
                  </select>
                </div>
              </div>
              <input
                type="submit"
                value="Create Module"
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
  );
};

export default CreateModule;
