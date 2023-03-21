import React from "react";
import "./style/App.css";
import { Home, Navbar } from "./components/routeComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
