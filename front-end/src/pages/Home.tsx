// import React from "react";
// import NavbarCom from "../components/ui/NavbarCom";

import Banner from "../components/้home/Banner";

const Home = () => {

  return (
    <>
      <section id="home">
        <Banner />
      </section>
      <section
        id="about"
        style={{
          height: "100vh",
          padding: "50px",
          background: "#e6f7ff",
          marginBottom: "24px",
          borderRadius: "8px",
        }}
      >
        <h2>ℹ️ About Section</h2>
        <p>This is the about section.</p>
      </section>
      <section
        id="test"
        style={{
          height: "100vh",
          padding: "50px",
          background: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <h2>🧪 Test Section</h2>
        <p>This is the test section.</p>
      </section>
    </>
  );
};

export default Home;
