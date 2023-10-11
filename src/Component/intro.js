import React from "react";
import profile_picture from "../img/picture2.jpg";
import MyButton from "./myButton";

const Intro = () => {
  return (
    <section className="intro text-light">
      <div className="container-fluid">
        <img src={profile_picture} className="bio" />
        <h2 className="mt-3">Tek kheng</h2>
        <p>Student | Universitas Esa Unggul</p>
        <MyButton btnClass="btn btn-warning btn1 mt-3" targetLink="#about" text="See More"/>
      </div>
    </section>
  );
};

export default Intro;
