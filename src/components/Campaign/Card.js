import React from "react";
import "./Card.css";
import img from "./img-1.jpg";
export default function Component(props) {
  return (
      <div className="article-card">
        <div className="content">
          <p className="title">{props.title}</p>
          <p className="info">
            {props.info}
          </p>
        </div>
        <img src={img} alt="article-cover" />
      </div>
  );
}
// "https://firebasestorage.googleapis.com/v0/b/bhavna-ngo.appspot.com/o/poshan.jpeg?alt=media&token=ce9301ca-4cd2-4c88-893e-e136dffee051"
