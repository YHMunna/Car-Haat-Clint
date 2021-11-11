import React from "react";
import { Carousel } from "react-bootstrap";
import redcar from "../../../Image/SliderImage/red car.jpg";
import yellowcar from "../../../Image/SliderImage/yellocar.jpg";
import blackcar from "../../../Image/SliderImage/blackcar.jpg";
const TopBanner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={redcar} alt="First slide" />
        <Carousel.Caption>
          <h3>Gorgeius Red Car</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={yellowcar} alt="Second slide" />

        <Carousel.Caption>
          <h3>Lemon Yellow Car</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={blackcar} alt="Third slide" />

        <Carousel.Caption>
          <h3>Off White Car</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default TopBanner;
