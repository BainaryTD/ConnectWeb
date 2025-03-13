import React from "react";
import { Card, Row, Col, Typography } from "antd";
import image32 from "../../assets/images/32.png";

const { Title, Paragraph } = Typography;

const Articles: React.FC = () => {
  const articles = [
    {
      title: "Essential Documents for a Company Audit",
      date: "March 5, 2025",
      category: "Auditing",
      image: image32,
    },
    {
      title: "Understanding Auditors: Roles and Responsibilities",
      date: "March 5, 2025",
      category: "Auditing",
      image: image32,
    },
    {
      title: "Comprehensive Services Offered by ConnectAcc Audit Firm",
      date: "February 14, 2025",
      category: "Auditing",
      image: image32,
    },
    {
      title: "How ConnectAcc Helps Businesses with Audit Compliance",
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
            <Col key={index} xs={24} sm={12} lg={6}>
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
                  height: "100%",
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
