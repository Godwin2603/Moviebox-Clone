import { useRef } from "react";
import "../css/carousel.css";

function Carousel({ content, heading }) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-wrapper relative">
      {/* Header */}
      <div className="heading flex justify-between items-center">
        <h1 className="font-bold">{heading}</h1>
        <button className="text-gray-400 hover:text-white font-bold">
          More <i className="fa fa-chevron-right"></i>
        </button>
      </div>

      {/* Buttons */}
      <button className="btn btns-left" onClick={scrollLeft}>
        <i className="fa fa-chevron-left"></i>
      </button>
      <button className="btn btns-right" onClick={scrollRight}>
        <i className="fa fa-chevron-right"></i>
      </button>

      {/* Carousel */}
      <div ref={carouselRef} className="carousel-container overflow-x-auto flex gap-4">
        {content.map((item, index) => (
          <div className="item-container" key={index}>
            <div className="item">
              <img src={item.cover} className="item-cover" alt={item.title} />
              <small className="item-title">{item.title}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
