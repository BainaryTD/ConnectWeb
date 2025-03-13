import React from "react";
import Marquee from "react-fast-marquee";
import { Image } from "antd";
import image11 from "../../assets/images/11.png";

const partners = [
  { src: image11, alt: "" },
  { src: image11, alt: "" },
  { src: image11, alt: "" },
  { src: image11, alt: "" },
  { src: image11, alt: "" },
  { src: image11, alt: "" },
  { src: image11, alt: "" },
  { src: image11, alt: "" },
  { src: image11, alt: "" },
];

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl font-bold text-gray-700 mb-8">
        Our Trusted Partners
      </h2>
      
      <Marquee speed={50}>
        {partners.map((partner, index) => (
          <div key={index} className="mx-8 flex items-center">
            <Image
              src={partner.src}
              alt={partner.alt}
              preview={false}
              style={{ maxWidth: "150px", height: "auto" }}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Partners;
