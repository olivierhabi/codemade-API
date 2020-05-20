import React, { useState, useEffect } from "react";
import API from "../components/Api";
import iconCheckSmall from "../img/icon-check-small.svg";
import Image from "../img/blog-large-04.jpg";
import ArrowRight from "../img/icon-arrow-right.svg";
import IconStar from "../img/icon-star.svg";
import IconChevronRight from "../img/icon-chevron-right.svg";
import IconVideoPlay from "../img/icon-video-play.svg";

const SingleCourses = () => {
  const [data, setData] = useState([]);
  const [module, setModule] = useState([]);
  const [rate, setRate] = useState([]);

  const token = localStorage.getItem("auth-token");
  const options = {
    headers: { Authorization: token },
  };
  const fetchCourse = async () => {
    let mounted = true;
    await API.get("/course/7", options)
      .then((res) => {
        if (mounted) {
          // console.log(res.data);
          setData(res.data.data[0]);
        }
      })
      .catch((err) => console.log(err));
  };

  const fetchModule = async () => {
    let mounted1 = true;
    await API.get("/module/7/course", options)
      .then((res) => {
        if (mounted1) {
          // const data = res.data.data;
          setModule(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const fetchRate = async () => {
    let mounted2 = true;
    await API.get("/rate/1/course", options)
      .then((res) => {
        if (mounted2) {
          // console.log(res.data.data);
          setRate(res.data.data);
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

  useEffect((mounted1) => {
    fetchModule();
    return () => {
      mounted1 = false;
    };
  }, []);

  useEffect((mounted2) => {
    fetchRate();
    return () => {
      mounted2 = false;
    };
  }, []);

  const Module = (module, index) => {
    return (
      <a
        key={index}
        href="../../template/style-guide/index.htm"
        className="list-grid-link w-inline-block"
      >
        <div className="icon-horizontal">
          <div className="icon-horizontal-heading">{module.module.title}</div>
        </div>
        <img src={IconChevronRight} alt="" className="list-grid-link-arrow" />
      </a>
    );
  };

  const Iconstar = (rate) => {
    // for (var i = 0; i < rate; i++) {
    //   const phone = data[i];
    // console.log(typeof rate.rate);

    return <img src={IconStar} alt="" />;
  };

  const Rate = (rate) => {
    return (
      <div className="boxed">
        <div className="stars-row boxed-stars-row">
          <Iconstar rate={rate.rate.rate} />
          <p>{rate.rate.rate}</p>
        </div>
        <div className="text-large">{rate.rate.commentRate}</div>
        <div className="rating-author">
          <div className="text-small">{rate.rate.name}</div>
          <div className="text-small text-muted">Broadbeach</div>
        </div>
      </div>
    );
  };

  const Features = () => {
    console.log(data.features);
    return (
      <div className="list-grid-item">
        <div className="check-circle">
          <img src={iconCheckSmall} alt="" />
        </div>
        <div>{data.features}</div>
      </div>
    );
  };

  return (
    <>
      <div className="view-single-course">
        <div className="view-single-course__course-block">
          <div className="section bg-gray-4">
            <div className="main-container">
              <div className="w-layout-grid grid-halves">
                <div className="container align-center">
                  <h5 className="text-primary-3">{data.courseType}</h5>
                  <h3 className="display-heading-2">{data.title}</h3>
                  <div className="text-large">{data.body}</div>
                </div>
                <div className="container-small align-center">
                  <div className="color-link-box bg-primary-3">
                    <div className="color-link-box-card shadow">
                      {/* <img src={Image} alt="" className="rounded-top" /> */}
                      <div class="video-wrapper">
                        <img src={Image} alt="" className="rounded-top" />
                        <a
                          href="../index.htm#"
                          class="video-play-icon align-center bg-white w-inline-block w-lightbox"
                        >
                          <img src={IconVideoPlay} alt="" />
                          <script type="application/json" class="w-json">
                            {/* {
                    "items": [
                      {
                        "type": "video",
                        "originalUrl": "https://vimeo.com/398084063",
                        "url": "https://vimeo.com/398084063",
                        "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F398084063%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F398084063&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F865582280_1280.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=vimeo\" width=\"940\" height=\"529\" scrolling=\"no\" title=\"Vimeo embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
                        "thumbnailUrl": "../../../i.vimeocdn.com/video/865582280_1280.jpg",
                        "width": 940,
                        "height": 529
                      }
                    ]
                  } */}
                          </script>
                        </a>
                      </div>

                      <div className="boxed-course square-top">
                        <h6 className="course-title text-primary">
                          {data.courseType}
                        </h6>
                        <div className="course-intro">{data.body}</div>
                      </div>
                      <div className="bottom-course">
                        <p className="bottom-course__course-type text-primary">
                          {data.courseType}
                        </p>
                        <p className="bottom-course__course-price">
                          ${data.price}
                        </p>
                      </div>
                    </div>
                    <a
                      href="../../template/style-guide/index.htm"
                      className="link-with-arrow w-inline-block"
                    >
                      <div className="text-white">Buy Now</div>
                      <img src={ArrowRight} alt="" className="link-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section bg-gray-4">
            <div className="main-container">
              <div className="w-layout-grid grid-halves">
                <div className="container-small">
                  <h6>Course Modules:</h6>
                  <div className="boxed no-padding">
                    <div className="list-grid-vertical no-gaps">
                      {module.map((module) => {
                        // eslint-disable-next-line no-redeclare
                        var index = index + 1;
                        return <Module module={module} index={index} />;
                      })}
                    </div>
                  </div>
                </div>
                <div className="container-large">
                  <h6>This course will cover:</h6>
                  <div className="w-layout-grid checklist-grid-halves">
                    <div className="list-grid-vertical">
                      <Features />
                      <Features />
                      <Features />
                      <Features />
                    </div>
                    <div className="list-grid-vertical">
                      <Features />
                      <Features />
                      <Features />
                      <Features />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourses;
