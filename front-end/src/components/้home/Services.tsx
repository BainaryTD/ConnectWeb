import React from "react";
import { Row, Col, Image, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import image43 from "../../assets/images/43.png";

const { Title, Paragraph } = Typography;

const Services: React.FC = () => {
  return (
    <section style={{ padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
      <div className="max-w-6xl mx-auto">
        <Row gutter={[32, 32]} align="middle">
          {/* คอลัมน์ซ้าย: รูปภาพ */}
          <Col xs={24} md={10}>
            <div style={{ position: "relative" }}>
              <Image
                src={image43}
                alt="Services"
                preview={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              {/* Overlay ข้อความบนรูปภาพ */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                <Title level={5} style={{ margin: 0, color: "#003366" }}>
                  Trusted Accounting Services
                </Title>
              </div>
            </div>
          </Col>

          {/* คอลัมน์ขวา: รายละเอียด Services */}
          <Col xs={24} md={14}>
            <Title level={2} style={{ color: "#003366" }}>
              Our Services
            </Title>
            <Paragraph style={{ color: "#666", fontSize: "16px" }}>
              We provide professional accounting and financial services tailored
              to meet your business needs.
            </Paragraph>

            {/* รายการ Services */}
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Financial Planning & Consulting",
                "Tax Preparation & Filing",
                "Bookkeeping & Payroll Services",
                "Audit & Assurance",
              ].map((service, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <CheckCircleOutlined
                    style={{
                      fontSize: "20px",
                      color: "#1890ff",
                      marginRight: "10px",
                    }}
                  />
                  <span style={{ fontSize: "16px", color: "#333" }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Services;
