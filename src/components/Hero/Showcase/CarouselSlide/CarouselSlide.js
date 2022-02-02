import React from "react";
import showcaseImage from "../../../../assets/images/showcase.png";

const CarouselSlide = () => {
  return (
    <div className="carousel carousel-one">
      <p className="showcase-header">
        Temuriylar <br />
        davri <br />
        adabiyoti <br />
      </p>
      <img className="carousel-image" src={showcaseImage} alt="carousel-image" />
    </div>
  )
}

export default CarouselSlide;