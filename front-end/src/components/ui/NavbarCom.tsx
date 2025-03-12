import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { Layout, Affix, Drawer, Button } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  ExperimentOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const sections = [
  { key: "/#home", label: "Home", icon: <HomeOutlined /> },
  { key: "/#about", label: "About", icon: <InfoCircleOutlined /> },
  { key: "/#test", label: "Test", icon: <ExperimentOutlined /> },
  { key: "/contact", label: "Contact", icon: <InfoCircleOutlined /> },
];

const NavbarCom: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeKey, setActiveKey] = useState(() => {
    return location.pathname === "/" && !location.hash
      ? "/#home"
      : location.pathname + location.hash;
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ตรวจสอบขนาดหน้าจอ
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ตรวจสอบว่า scroll อยู่ใน section ใด
  useEffect(() => {
    if (location.pathname !== "/") return;
    const handleScroll = () => {
      for (const section of sections) {
        if (section.key.startsWith("/#")) {
          const id = section.key.substring(2);
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveKey(section.key);
              break;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // อัปเดต activeKey เมื่อ pathname หรือ hash เปลี่ยน
  useEffect(() => {
    setActiveKey(
      location.pathname === "/" && !location.hash
        ? "/#home"
        : location.pathname + location.hash
    );
  }, [location.pathname, location.hash]);

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.substring(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate({ to: `/${href}` });
      }
    } else {
      e.preventDefault();
      navigate({ to: href });
    }
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Affix offsetTop={0}>
        <Header
          style={{
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Link to="/">
            <h2 style={{ margin: 0, cursor: "pointer", color: "#1677ff" }}>
              MyLogo
            </h2>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {isMobile ? (
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setIsDrawerOpen(true)}
              />
            ) : (
              <div style={{ display: "flex", gap: "20px" }}>
                {sections.map((item) => (
                  <a
                    key={item.key}
                    href={item.key}
                    onClick={(e) => handleNavigation(e, item.key)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "16px",
                      textDecoration: "none",
                      color: activeKey === item.key ? "#722ED1" : "#1677ff",
                      fontWeight: activeKey === item.key ? "bold" : "normal",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.icon} {item.label}
                  </a>
                ))}
              </div>
            )}
            <div className="flex justify-center items-center w-[24px] h-[24px] rounded bg-gray-400">
              <Link
                to="/login"
                className="text-lg text-gray-700 hover:text-blue-500"
              >
                <UserOutlined />
              </Link>
            </div>
          </div>
        </Header>
      </Affix>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {sections.map((item) => (
            <a
              key={item.key}
              href={item.key}
              onClick={(e) => handleNavigation(e, item.key)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                textDecoration: "none",
                color: activeKey === item.key ? "#722ED1" : "#1677ff",
                fontWeight: activeKey === item.key ? "bold" : "normal",
                transition: "color 0.3s ease",
              }}
            >
              {item.icon} {item.label}
            </a>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default NavbarCom;
