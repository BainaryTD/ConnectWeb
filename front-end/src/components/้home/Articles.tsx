import React from "react";
import { Card, Row, Col, Typography } from "antd";
import image32 from "../../assets/images/32.png";

const { Title, Paragraph } = Typography;

const Articles: React.FC = () => {
  const articles = [
    {
      title: "What Documents Do Companies Need for an Audit?",
      date: "March 5, 2025",
      category: "Auditing",
      image: image32,
    },
    {
      title: "Who Are Auditors and What Are Their Responsibilities?",
      date: "March 5, 2025",
      category: "Auditing",
      image: image32,
    },
    {
      title: "What Services Does ConnectAcc Audit Firm Provide?",
      date: "February 14, 2025",
      category: "Auditing",
      image: image32,
    },
  ];

  return (
    <section style={{ padding: "60px 20px", backgroundColor: "#ffffff" }}>
      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: "30px", color: "#003366" }}
      >
        Latest Articles
      </Title>
      <div className="max-w-6xl mx-auto">
        <Row gutter={[24, 24]} justify="center">
          {articles.map((article, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card
                hoverable
                cover={
                  <img
                    alt={article.title}
                    src={article.image}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                }
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <Title level={4} style={{ fontSize: "18px", color: "#003366" }}>
                  {article.title}
                </Title>
                <Paragraph style={{ color: "gray", fontSize: "14px" }}>
                  {article.date} | {article.category}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Articles;
