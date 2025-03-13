import React from "react";
import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

const History: React.FC = () => {
  return (
    <section className="bg-gray-900 !text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <p className="!text-blue-400 font-semibold">Our Journey</p>
          <Title level={1} className="!text-white">
            The Story of ConnectWeb
          </Title>
        </div>

        {/* History Content */}
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Paragraph className="!text-gray-300">
              Founded in 2015, ConnectWeb started as a small digital solutions
              provider, aiming to simplify business management through
              innovative technology. With a mission to offer seamless and
              efficient services, we quickly expanded our reach across multiple
              industries.
            </Paragraph>
            <Paragraph className="!text-gray-300">
              Over the years, our team has worked tirelessly to enhance our
              platform, integrating the latest technological advancements to
              deliver top-notch accounting and business solutions.
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Paragraph className="!text-gray-300">
              Today, ConnectWeb serves businesses worldwide, offering
              cutting-edge digital tools that streamline financial processes.
              Our commitment to innovation and customer satisfaction has made us
              a trusted partner in the industry.
            </Paragraph>
            <Paragraph className="!text-gray-300">
              As we look ahead, we continue to evolve, ensuring that our
              solutions remain at the forefront of technological excellence.
            </Paragraph>
          </Col>
        </Row>

        {/* Statistics */}
        <Row gutter={[32, 32]} className="mt-12 text-center">
          <Col xs={12} sm={6}>
            <Title level={2} className="!text-white">
              2015
            </Title>
            <p className="!text-gray-400">Founded</p>
          </Col>
          <Col xs={12} sm={6}>
            <Title level={2} className="!text-white">
              120+
            </Title>
            <p className="!text-gray-400">Employees</p>
          </Col>
          <Col xs={12} sm={6}>
            <Title level={2} className="!text-white">
              30+
            </Title>
            <p className="!text-gray-400">Countries</p>
          </Col>
          <Col xs={12} sm={6}>
            <Title level={2} className="!text-white">
              $50M
            </Title>
            <p className="!text-gray-400">Annual Revenue</p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default History;
