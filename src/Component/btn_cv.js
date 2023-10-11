import React, { useState, useRef } from "react";
import myCv from "../files/Tek Kheng - CV.pdf";

const CV = (props) => {
  const btnStyle = "btn btn-warning mt-3 btn1";

  return (
    <>
      <button className={btnStyle}>
        <a
          href={myCv}
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
          download
        >
          {props.text}
        </a>
      </button>
    </>
  );
};

export default CV;
