import React, { useState, useEffect } from "react";
import API from "./Api";

const CreateVideo = () => {
  const [data, setData] = useState([]);
  const [modules, setModules] = useState([]);
  const [module, setModule] = useState("");
  const [videoUrl, setVideourl] = useState("");

  const token = localStorage.getItem("auth-token");
  const options = {
    headers: { Authorization: token },
  };
  const fetchCourse = async () => {
    let mounted = true;
    await API.get("/course", options)
      .then((res) => {
        if (mounted) {
          // console.log(res.data.data);
          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect((mounted) => {
    fetchCourse();
    return () => {
      mounted = false;
    };
  }, []);

  const fetchModule = async (course) => {
    // let mounted1 = true;
    await API.get(`/module/${course}/course`, options)
      .then((res) => {
        // if (mounted1) {
        console.log(res.data.data);
        setModules(res.data.data);
        // }
      })
      .catch((err) => console.log(err));
  };

  // useEffect((mounted1) => {
  //   fetchModule();
  //   return () => {
  //     mounted1 = false;
  //   };
  // }, []);

  return (
    <div className="account-page-content">
      <div className="main-container">
        <div className="container-small align-center text-center">
          <div className="account-title">
            <h1>Create Video</h1>
            <div className="text-large">
              Complete the form below to create Video.
            </div>
          </div>
          <div className="form-block w-form">
            <form
              id="wf-form-Sign-Up-Form"
              name="wf-form-Sign-Up-Form"
              data-name="Sign Up Form"
              className="form-grid-vertical"
            >
              <div>
                <label
                  for="Phone-Number-2"
                  className="text-small form-input-label"
                >
                  Select Course
                  <a href="../index.htm#" className="text-danger">
                    *
                  </a>
                  <span className="text-danger"></span>
                </label>
                <div className="select-field">
                  <select
                    key="1"
                    id="Preferred-Method"
                    onChange={(e) => {
                      fetchModule(e.target.value);
                    }}
                    required=""
                    className="select-field-unstyled w-select"
                  >
                    <option value="">Select an option</option>
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
              <div>
                <label
                  for="Phone-Number-2"
                  className="text-small form-input-label"
                >
                  Select Module
                  <a href="../index.htm#" className="text-danger">
                    *
                  </a>
                  <span className="text-danger"></span>
                </label>
                <div className="select-field">
                  <select
                    key="2"
                    id="Preferred-Method"
                    onChange={(e) => {
                      setModule(e.target.value);
                    }}
                    required=""
                    className="select-field-unstyled w-select"
                  >
                    <option value="">Select an option</option>
                    {modules.map((data, index) => {
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
              <div>
                <label
                  for="Phone-Number-2"
                  className="text-small form-input-label"
                >
                  Select Video
                  <a href="../index.htm#" className="text-danger">
                    *
                  </a>
                  <span className="text-danger"></span>
                </label>
                <div className="select-field">
                  <select
                    key="3"
                    id="Preferred-Method"
                    name="Preferred-Method"
                    data-name="Preferred Method"
                    required=""
                    className="select-field-unstyled w-select"
                  >
                    <option value="">Select an option</option>
                    <option value="First">First Module</option>
                    <option value="Second">Second Module</option>
                    <option value="Third">Third Module</option>
                  </select>
                </div>
              </div>
              <input
                type="submit"
                value="Create Video"
                data-wait="Please wait..."
                className="button w-button"
              />
            </form>
            <div className="form-success w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="form-error w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateVideo;
