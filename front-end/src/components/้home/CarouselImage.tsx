import React from "react";
import { Carousel } from "antd";
import image163 from "../../assets/images/163.png";

const CarouselImage: React.FC = () => {
  const images = [image163, image163, image163];

  return (
    <Carousel arrows autoplay effect="fade" dotPosition="bottom">
      {images.map((src, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselImage;
