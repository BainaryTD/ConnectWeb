import React from "react";
import { Layout, Image, Typography } from "antd";
import image219 from "../../assets/images/219.png";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Banner: React.FC = () => {
  return (
    <Content
      style={{ position: "relative", textAlign: "center", color: "#fff" }}
    >
      <Image
        src={image219}
        alt="Banner"
        preview={false}
        style={{
          width: "100%",
          //   height: "400px",
          objectFit: "cover",
          filter: "brightness(0.7)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        <Title level={2} style={{ color: "#fff", fontWeight: "bold" }}>
          Welcome to Our Website
        </Title>
        <div className="hidden md:block">
          <Paragraph style={{ color: "#fff", fontSize: "18px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sem orci, iaculis sed lectus sed, pretium convallis augue. Nullam
            venenatis ligula non tortor condimentum.
          </Paragraph>
        </div>
      </div>
    </Content>
  );
};

export default Banner;
