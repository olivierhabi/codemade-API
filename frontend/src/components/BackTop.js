import React from "react";
import IconUp from "../img/icon-chevron-up.svg";

const BackTop = () => {
  return (
    <div id="Top" class="back-to-top-container">
      <h1>Back to top</h1>
      <div class="back-to-top-button-container">
        <a
          href="../index.htm#Top"
          class="button-round button-round-small w-inline-block"
        >
          <img className="image" src={IconUp} alt="" />
        </a>
      </div>
    </div>
  );
};

export default BackTop;
