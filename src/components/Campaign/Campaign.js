import React from "react";
// import img from "./img-1.jpg";
import "./Campaign.css";
// const mission = [
//   {
//     img_src: { img },
//     title: "Jagriti",
//     info: "Eradicating literacy and making children self sufficient.",
//   },

//   {
//     img_src: { img },
//     title: "Raktanjali",
//     info: "Organizing blood donation and promoting awareness.",
//   },

//   {
//     img_src: { img },
//     title: "Green Citizens",
//     info: "Protecting and conserving our environment.",
//   },

//   {
//     img_src: { img },
//     title: "Swastha Bharat",
//     info: "Republic Day",
//   },
//   {
//     img_src: { img },
//     title: "XYZ",
//     info: "Promoting health awareness and conducting medical checkup camps.",
//   },
//   {
//     img_src: { img },
//     title: "Rahat",
//     info: "To provide financial/material aid to natural disaster victims.",
//   },
// ];

export default function Campaign() {
  return (
    <div className="Container">
      <div className="main-con">
      <div className="heading">
        <h2 className="heading__title">Our Programmes</h2>
      </div>
      <div className="cards">
        <div className="card card-1">
          <div className="card__icon">
            <i className="fa-light fa-book-open"></i>
          </div>
          <h2 className="card__title">
            Jagriti
          </h2>
        </div>
        <div className="card card-2">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </div>
        <div className="card card-3">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
          <h2 className="card__title">Ut enim ad minim veniam.</h2>
        </div>
        <div className="card card-4">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
           
          <h2 className="card__title">
            Quis nostrud exercitation ullamco laboris nisi.
          </h2>
           
        </div>
        <div className="card card-5">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
           
          <h2 className="card__title">
            Ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </h2>
           
        </div>
        <div className="card card-1">
          <div className="card__icon">
            <i className="fas fa-bolt"></i>
          </div>
           
          <h2 className="card__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
           
        </div>
      </div>
    </div>
    </div>
  );
}
