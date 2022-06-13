import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import data from "./images.json";

import "./Main.scss";

const Main = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { images = [] } = data || [];

  const handlers = useSwipeable({
    onSwipedRight: () => setActiveSlide(activeSlide === 0 ? images.length - 1 : activeSlide - 1),
    onSwipedLeft:  () => setActiveSlide(activeSlide === images.length - 1 ? 0 : activeSlide + 1),
  });

  return (
    <div className="Main" data-carousel {...handlers}>
      <button className="Main__button prev" onClick={() => !console.log("prev") && 
        setActiveSlide(activeSlide === 0 ? images.length - 1 : activeSlide - 1)
        } data-carousel-button="prev">&#8656;</button>

      <button className="Main__button next" onClick={() => !console.log("suivant") && 
          setActiveSlide(activeSlide === images.length - 1 ? 0 : activeSlide + 1)
        }
        data-carousel-button="next">&#8658;</button>
      <ul className="Main__container">
          {images.map(({ caption, url, date }, index) => (
            <li data-active={activeSlide === index} className="Main__slide" key={date}>
              <img
                className="Main__image"
                src={url}
                alt={`${date} ${caption}`}
                loading="lazy"
              />
              <div className="Main__caption">
                <span className="Main__date">{date}</span> {caption}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Main;
