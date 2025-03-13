import React from "react";
import { Divider, Layout } from "antd";
import NavbarCom from "../components/ui/NavbarCom";
import FooterCom from "../components/ui/FooterCom";

const { Content, Footer } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "gray",
  paddingTop: 0,
};
const LayoutCustom = ({ children }: LayoutProps) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <NavbarCom />

      <Content
        style={{
          // padding: 24,
          margin: 0,
          minHeight: "100%",
          background: "#EEEEEE",
        }}
      >
        <div>{children}</div>
      </Content>

      {/* Footer */}
      <FooterCom />
      <Footer style={footerStyle}>
        <Divider style={{ marginTop: 0 }} />
        ConnentWeb ©{new Date().getFullYear()} Created by Bainary
      </Footer>
    </Layout>
  );
};

export default LayoutCustom;
