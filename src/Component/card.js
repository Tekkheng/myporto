import React from "react";

const Card = (props) => {
  return (
    <div
      className="col-lg-3 col-md-4 col-sm-6 mt-3"
      data-aos="zoom-out-right"
      data-aos-duration="1200"
    >
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.isi}</p>
          <a target="_blank" href={props.link_p} className="btn btn-primary">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
