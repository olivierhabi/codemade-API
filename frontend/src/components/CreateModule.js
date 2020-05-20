import React, { useState, useEffect } from "react";
import API from "./Api";

const CreateModule = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [courseId, setCourseid] = useState("");
  const [message, setMessage] = useState("");

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

    API.post(
      "/module",
      {
        title: title,
        body: body,
        courseId: courseId,
      },
      options
    ).then(
      (response) => {
        const { message } = response.data;
        setMessage(message);
        setTitle("");
        setBody("");
        setCourseid("");
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
              <h1>Create Module</h1>
              <div class="text-large">Complete the form below to Module.</div>
            </div>
            <div class="form-block w-form">
              <form
                onSubmit={SubmitModule}
                id="wf-form-Sign-Up-Form"
                class="form-grid-vertical"
              >
                <div class="icon-form-input">
                  <input
                    type="text"
                    value={title}
                    name="title"
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
                    name="body"
                    onChange={(e) => setBody(e.target.value)}
                    class="body-input form-input-unstyled w-input"
                    placeholder="Body of Module"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="Phone-Number-2"
                    class="text-small form-input-label"
                  >
                    Select Course
                    <a href="../index.htm#" class="text-danger">
                      *
                    </a>
                    <span class="text-danger"></span>
                  </label>
                  <div class="select-field">
                    <select
                      onChange={(e) => setCourseid(e.target.value)}
                      id="Preferred-Method"
                      required=""
                      class="select-field-unstyled w-select"
                    >
                      <option value={""}>Select an option</option>
                      {data.map((data, index) => {
                        // eslint-disable-next-line no-redeclare
                        var index = index + 1;

                        return (
                          <>
                            <option key={index} value={data.id}>
                              {data.title}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <Error />
                <input type="submit" class="button w-button" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateModule;
