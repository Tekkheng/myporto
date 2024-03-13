/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import profile_picture from "../img/picture2.jpg";
import MyButton from "./myButton";
const About = () => {
  return (
    <>
    <section className="aboutme" id="about" style={{backgroundColor:"#ddd"}}>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-6 col-sm-6 text-center"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img src={profile_picture} className="bio" />
            <div className="social-media">
              <a
                target="_blank"
                href="https://github.com/Tekkheng?tab=repositories"
                className="github text-dark" rel="noreferrer"
              >
                <i className="bi bi-github p-2"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/akheng_je/?hl=en"
                className="ig text-dark" rel="noreferrer"
              >
                <i className="bi bi-instagram p-2"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/tek-kheng-58211723b/"
                className="lidln text-dark" rel="noreferrer"
              >
                <i className="bi bi-linkedin p-2"></i>
              </a>
            </div>
            <MyButton btnClass="btn btn-warning btn1 mt-3" text="Download CV"/>
          </div>

          <div
            className="col-lg-6 col-md-6 col-sm-6"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h2>About Me</h2>
            <p>
              I am interested in computer science especially programming and I
              am studying at Esaunggul University, majoring in Informatics
              Engineering, I study computer science related things and regularly
              improve my skills, Likes to learn something new, Able to
              prioritize and delegate tasks effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#ddd"
        fillOpacity="1"
        d="M0,224L48,197.3C96,171,192,117,288,128C384,139,480,213,576,240C672,267,768,245,864,197.3C960,149,1056,75,1152,64C1248,53,1344,107,1392,133.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
    </>
  );
};

export default About;
