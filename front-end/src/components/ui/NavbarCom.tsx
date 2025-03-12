import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { Layout, Affix, Drawer, Button, Dropdown, MenuProps } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  ExperimentOutlined,
  MenuOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useGetUser } from "../../hooks/useGetUser";

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

  // เช็ค Token จาก sessionStorage
  const accessToken = sessionStorage.getItem("access_token") || "";

  // เรียก useGetUser เมื่อมี token เท่านั้น
  const { data: user, isLoading, isError } = useGetUser({
    enabled: !!accessToken,
  });

  // จัดการ activeKey สำหรับไฮไลท์เมนู
  const [activeKey, setActiveKey] = useState(() => {
    return location.pathname === "/" && !location.hash
      ? "/#home"
      : location.pathname + location.hash;
  });

  // Drawer สำหรับ mobile
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

  // ตรวจสอบว่า scroll อยู่ใน section ใด (เฉพาะอยู่ในหน้า /)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      for (const section of sections) {
        if (section.key.startsWith("/#")) {
          const id = section.key.substring(2);
          const element = document.getElementById(id);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          // ถ้าส่วนบน (top) และล่าง (bottom) ของ element อยู่ตรงตำแหน่ง
          // พอเหมาะ (ประมาณกลางจอ) ให้ active เมนูตัวนั้น
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveKey(section.key);
            break;
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

  // ฟังก์ชันเลื่อนไปที่ Anchor หรือ navigate ไปหน้าอื่น
  const handleNavigation = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault(); // ป้องกันไม่ให้โหลดซ้ำ
      const id = href.substring(2);

      if (location.pathname === "/") {
        // ถ้าอยู่หน้า "/" แล้ว ก็เลื่อนไปยัง anchor
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // ถ้าอยู่หน้าคนละ path → navigate กลับ "/" พร้อม hash แล้วค่อยเลื่อน
        navigate({ to: `/${href}` });
      }
    } else {
      e.preventDefault();
      navigate({ to: href });
    }
    setIsDrawerOpen(false);
  };

  // ฟังก์ชัน Logout
  const handleLogout = () => {
    sessionStorage.removeItem("access_token");
    navigate({ to: "/login" });
  };

  // สร้างเมนูใน Dropdown (AntD v5)
  const dropdownItems: MenuProps["items"] = [
    {
      key: "email",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <UserOutlined />
          {/* ถ้าโหลดอยู่ให้แสดง Loading ถ้า error แสดง Error ถ้าได้ data แล้วแสดงชื่อ */}
          {isLoading ? "Loading..." : isError ? "Error" : user?.email || "Email"}
        </div>
      ),
    },
    { type: "divider" },
    {
      key: "logout",
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <LogoutOutlined />
          <span onClick={handleLogout}>Logout</span>
        </div>
      ),
    },
  ];

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
          {/* โลโก้ */}
          <Link to="/">
            <h2 style={{ margin: 0, cursor: "pointer", color: "#1677ff" }}>
              MyLogo
            </h2>
          </Link>

          {/* โซนขวาของ Navbar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* ถ้าเป็น Mobile ให้ใช้ Drawer */}
            {isMobile ? (
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setIsDrawerOpen(true)}
              />
            ) : (
              // ถ้าเป็น Desktop แสดงลิงก์ปกติ
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

            {/* ถ้าไม่มี Token → แสดงปุ่ม Login */}
            {!accessToken ? (
              <div className="flex justify-center items-center w-[24px] h-[24px] rounded bg-blue-300 hover:bg-blue-500">
                <Link to="/login" className="text-lg !text-white">
                  <UserOutlined />
                </Link>
              </div>
            ) : (
              // ถ้ามี Token → แสดง Dropdown
              <Dropdown menu={{ items: dropdownItems }} trigger={["click"]}>
                <Button type="text">
                  <UserOutlined />
                  {isLoading
                    ? "Loading..."
                    : isError
                      ? "Error"
                      : user?.fullname || "User"}
                </Button>
              </Dropdown>
            )}
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
