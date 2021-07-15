import React from "react";
import { Slide } from "react-slideshow-image";
import data from "./images.json";
import "react-slideshow-image/dist/styles.css";

import "./Main.scss";

const slideProperties = {
  autoplay: false,
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
