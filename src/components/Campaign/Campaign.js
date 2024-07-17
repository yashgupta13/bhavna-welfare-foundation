import React from "react";
import img from "./img-1.jpg";
import Card from "./Card";
import "./Campaign.css";
const mission = [
  {
    img_src: { img },
    title: "Jagriti",
    info: "Eradicating literacy and making children self sufficient.",
  },

  {
    img_src: { img },
    title: "Raktanjali",
    info: "Organizing blood donation and promoting awareness.",
  },

  {
    img_src: { img },
    title: "Green Citizens",
    info: "Protecting and conserving our environment.",
  },

  {
    img_src: { img },
    title: "Swastha Bharat",
    info: "Republic Day",
  },
  {
    img_src: { img },
    title: "XYZ",
    info: "Promoting health awareness and conducting medical checkup camps.",
  },
  {
    img_src: { img },
    title: "Rahat",
    info: "To provide financial/material aid to natural disaster victims.",
  },
];

export default function Campaign() {
  const renderMission = () => {
    return mission.map((item) => {
      return (
        <Card title={item.title} img_src={item.img_src} info={item.info} />
      );
    });
  };

  return (
    <div className="campaign-container">
        <h3>Our Campaign</h3>
      <div className="card-container">
        {renderMission()}
        </div>
    </div>
  );
}
