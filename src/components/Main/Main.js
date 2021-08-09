import React from "react";
import { Slide } from "react-slideshow-image";
import data from "./images.json";
import "react-slideshow-image/dist/styles.css";

import "./Main.scss";

const slideProperties = {
  autoplay: false,
  prevArrow: (
    <div style={{ width: "30px", marginRight: "-30px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", marginLeft: "-30px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </div>
  ),
  transitionDuration: 500,
};

const Main = () => {
  const { images = [] } = data || [];

  return (
    <div className="Main">
      <div className="slide-container">
        <Slide {...slideProperties}>
          {images.map(({ caption, url, date }) => (
            <div className="Main__slide" key={date}>
              <img
                className="Main__image"
                src={url}
                alt={`${date} ${caption}`}
              />
              <div className="Main__caption">
                <span className="Main__date">{date}</span> {caption}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Main;
