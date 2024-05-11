import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel(props) {
  const data = props.data;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="CarouselContainer">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((item, index) => {
          return (
            <Carousel.Item>
              <div className="carousel-photo-container">
                <img
                  className="carousel-photo"
                  src={process.env.PUBLIC_URL + "/images" + item.img}
                  alt={item.name}
                  key={index}
                />
              </div>
              <Carousel.Caption>
                <h3 className="h3Caption">{item.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;