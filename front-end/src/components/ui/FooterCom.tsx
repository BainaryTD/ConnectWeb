import React from "react";
import { Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const FooterCom: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <Row gutter={[32, 32]} justify="center">
          {/* Navigation Links */}
          <Col xs={24} md={8}>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/#features" className="text-gray-400 hover:text-white">
                  Features
                </a>
              </li>
            </ul>
          </Col>
          {/* Company Info */}
          <Col xs={24} md={8}>
            <h2 className="text-xl font-bold">ConnectWeb</h2>
            <p className="text-gray-400 mt-2">
              Your trusted partner in digital solutions and financial
              management.
            </p>
          </Col>
          {/* Contact Information */}
          <Col xs={24} md={8}>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-400 mt-2">
              <MailOutlined /> support@connectweb.com
            </p>
            <p className="text-gray-400">
              <PhoneOutlined /> +1 234 567 890
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <FacebookOutlined />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <TwitterOutlined />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <LinkedinOutlined />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterCom;
