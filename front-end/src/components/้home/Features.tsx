import React from "react";
import { Card, Row, Col } from "antd";
import {
  SafetyOutlined,
  ThunderboltOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const Features = () => {
  // รายการฟีเจอร์
  const features = [
    {
      title: "Secure & Reliable",
      description:
        "Your data is protected with high-level security encryption.",
      icon: <SafetyOutlined style={{ fontSize: "40px", color: "#1890ff" }} />,
    },
    {
      title: "Fast & Scalable",
      description: "Designed to handle large-scale operations with ease.",
      icon: (
        <ThunderboltOutlined style={{ fontSize: "40px", color: "#faad14" }} />
      ),
    },
    {
      title: "Advanced Analytics",
      description: "Get detailed insights with smart data visualization.",
      icon: (
        <LineChartOutlined style={{ fontSize: "40px", color: "#52c41a" }} />
      ),
    },
  ];

  return (
    <section style={{ padding: "50px 20px", backgroundColor: "#f5f5f5" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Why Choose ConnectWeb?
      </h2>

      <div className="max-w-6xl mx-auto">
        <Row gutter={[24, 24]} justify="center">
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{
                  textAlign: "center",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <div>{feature.icon}</div>
                <h3
                  style={{
                    fontSize: "20px",
                    marginTop: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{ color: "gray", fontSize: "14px", marginTop: "10px" }}
                >
                  {feature.description}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Features;
