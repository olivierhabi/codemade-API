import React, { useState, useEffect } from "react";
import API from "../components/Api";
import Image from "../img/blog-large-04.jpg";

const ViewCourses = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("auth-token");
  const options = {
    headers: { Authorization: token },
  };
  const fetchCourses = async () => {
    let mounted = true;
    await API.get("http://localhost:5000/api/course", options)
      .then((res) => {
        if (mounted) {
          console.log(res.data.data);
          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect((mounted) => {
    fetchCourses();
    return () => {
      mounted = false;
    };
  }, []);

  const CourseCard = (course, index) => {
    return (
      <div key={index} class="container-small align-center">
        <div class="color-link-box-card shadow">
          <img src={Image} alt="" class="image-course rounded-top" />
          <div class="boxed-course square-top">
            <h6 className="course-title text-primary">{course.course.title}</h6>
            <div className="course-intro">{course.course.body}</div>
          </div>
          <div className="bottom-course">
            <p className="bottom-course__course-type text-primary">
              {course.course.courseType}
            </p>
            <p className="bottom-course__course-price">
              ${course.course.price}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="view-courses">
        <div className="view-courses__course-block">
          <div class="main-container">
            <h1 class="course-header display-heading-2">Available courses.</h1>
            <div className="text-large">
              All Available courses on Architect Academy.
            </div>
          </div>
          <div class="section bg-gray-4">
            <div class="main-container">
              <div class="w-layout-grid color-link-box-grid">
                {data.map((course, index) => {
                  // eslint-disable-next-line no-redeclare
                  var index = index + 1;
                  // console.log(course);
                  return <CourseCard course={course} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCourses;
