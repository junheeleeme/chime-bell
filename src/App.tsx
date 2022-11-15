import { useState, useEffect } from "react";
import Load from "./components/load";
import Bell from "./components/bell";

const App = () => {
  return (
    <>
      <Load />
      <div className="chime-bell-app">
        <Bell />
      </div>
    </>
  );
};

export default App;
