import React from "react";
import { MainContent, Navbar } from "./components/routeComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
