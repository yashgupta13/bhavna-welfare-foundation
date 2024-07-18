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
            <i class="bi bi-book"></i>
            </div>
            <h2 className="card__title">Jagriti</h2>
            <div className="card__text">
              <p>Eradicating literacy and making children self sufficient.</p>
            </div>
          </div>
          <div className="card card-6">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h2 className="card__title">Porshan</h2>
            <div className="card__text">
              <p>
              An attempt to save kids from malnutrition.
              </p>
            </div>
          </div>
          <div className="card card-2">
            <div className="card__icon">
            <i class="bi bi-droplet"></i>
            </div>
            <h2 className="card__title">Raktanjali</h2>
            <div className="card__text">
              <p>Organizing blood donation and promoting awareness.</p>
            </div>
          </div>
          <div className="card card-4">
            <div className="card__icon">
            <i class="bi bi-globe-central-south-asia"></i>
            </div>
            <h2 className="card__title">Green Citizens</h2>
            <div className="card__text">
              <p>Protecting and conserving our environment.</p>
            </div>
          </div>
          <div className="card card-3">
            <div className="card__icon">
            <i class="bi bi-prescription2"></i>
            </div>

            <h2 className="card__title">Swastha Bharat</h2>
            <div className="card__text">
              <p>
                Promoting health awareness and conducting medical checkup camps.
              </p>
            </div>
          </div>
          <div className="card card-5">
            <div className="card__icon">
            <i class="bi bi-bandaid"></i>
            </div>
            <h2 className="card__title">
            Rahat
            </h2>
            <div className="card__text">
              <p>
              To provide financial/material aid to natural disaster victims.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
