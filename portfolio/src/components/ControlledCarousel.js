import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel(props) {
  const data = props.data;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((item, index) => {
          return (
            <Carousel.Item>
              <img
                className="carousel-photo"
                src={process.env.PUBLIC_URL + "/images/" + item.img}
                alt={item.name}
                key={index}
              />
               <Carousel.Caption>
                  <h3>{item.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
      }
    </Carousel>
  );
}

export default ControlledCarousel;