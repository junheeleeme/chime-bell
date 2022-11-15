import { useState, useEffect } from "react";
import Container from "@mui/material/Container";

import Header from "./layout/header";
import Bell from "./components/bell";

const App = () => {
  return (
    <>
      <Header />
      <Container component="main" sx={{ position: "relative", height: "100%" }}>
        <div className="chime-bell-app">
          <Bell />
        </div>
      </Container>
    </>
  );
};

export default App;
