import React from "react";
import { Card, Row, Col, Avatar } from "antd";
import {
  TeamOutlined,
  CloudSyncOutlined,
  RocketOutlined,
} from "@ant-design/icons";

const About = () => {
  const cards = [
    {
      title: "Seamless Collaboration",
      description:
        "Work together effortlessly with real-time syncing across all devices.",
      icon: <TeamOutlined style={{ fontSize: "40px", color: "#1890ff" }} />,
    },
    {
      title: "Cloud-Based Access",
      description:
        "Your data is securely stored in the cloud for access anywhere, anytime.",
      icon: (
        <CloudSyncOutlined style={{ fontSize: "40px", color: "#faad14" }} />
      ),
    },
    {
      title: "Performance Optimized",
      description:
        "Experience ultra-fast speeds with our optimized technology.",
      icon: <RocketOutlined style={{ fontSize: "40px", color: "#52c41a" }} />,
    },
  ];

  return (
    <section style={{ padding: "50px 20px", backgroundColor: "#e6f7ff" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          marginBottom: "30px",
          fontWeight: "bold",
          color: "#0050b3",
        }}
      >
        What Makes ConnectWeb Unique?
      </h2>
      <div className="max-w-6xl mx-auto">
        <Row gutter={[24, 24]} justify="center">
          {cards.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{
                  textAlign: "center",
                  borderRadius: "15px",
                  padding: "20px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#ffffff",
                }}
              >
                <Avatar
                  size={64}
                  style={{
                    backgroundColor: "#f0f2f5",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </Avatar>
                <h3
                  style={{
                    fontSize: "20px",
                    marginTop: "15px",
                    fontWeight: "bold",
                    color: "#002766",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "#595959",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}
                >
                  {card.description}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default About;
