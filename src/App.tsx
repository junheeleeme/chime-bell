import { useState, useEffect } from "react";
import Container from "@mui/material/Container";

import Header from "./layout/header";
import Footer from "./layout/footer";
import Bell from "./components/bell";

const App = () => {
  return (
    <>
      <Header />
      <Container component="main" sx={{ position: "relative", height: "100%" }}>
        <Bell />
      </Container>
      <Footer />
    </>
  );
};

export default App;
