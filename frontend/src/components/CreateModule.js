import React, { useState, useEffect } from "react";
import API from "../components/Api";

const CreateModule = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [courseId, setCourseid] = useState("");

  const token = localStorage.getItem("auth-token");
  const options = {
    headers: { Authorization: token },
  };
  const fetchData = async () => {
    let mounted = true;
    await API.get("/course", options)
      .then((res) => {
        if (mounted) {
          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect((mounted) => {
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  const SubmitModule = (e) => {
    e.preventDefault();

    console.log(title, body, courseId);

    // API.post("/module", {
    //   title: title,
    //   body: body,
    //   courseId: courseId,
    // }).then(
    //   (response) => {
    //     // const { token, message } = response.data;
    //     // localStorage.setItem("auth-token", token);
    //     // setMessage(message);
    //     // history.push("/courses");
    //   },
    //   (error) => {
    //     // if (!error.response) {
    //     //   const networkError = "Error: network error";
    //     //   setMessage(networkError);
    //     // } else {
    //     //   const { message } = error.response.data;
    //     //   setMessage(message);
    //     // }
    //   }
    // );
  };

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
              onChange={SubmitModule}
              id="wf-form-Sign-Up-Form"
              class="form-grid-vertical"
            >
              <div class="icon-form-input">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  class="form-input-unstyled w-input"
                  placeholder="Title of Module"
                  required=""
                />
              </div>
              <div class="icon-form-input">
                <textarea
                  type="text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  class="form-input-unstyled w-input"
                  placeholder="Body of Module"
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
                    onChange={(e) => setBody(e.target.value)}
                    value={courseId}
                    required=""
                    class="select-field-unstyled w-select"
                  >
                    <option value="">Select an option</option>
                    {data.map((data, index) => {
                      // eslint-disable-next-line no-redeclare
                      var index = index + 1;

                      return (
                        <option
                          onChange={(e) => setBody(data.id)}
                          key={index}
                          value={courseId}
                        >
                          {data.title}
                        </option>
                      );
                    })}
                    {/* <option value="First">First Course</option>
                    <option value="Second">Second Course</option>
                    <option value="Third">Third Course</option> */}
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