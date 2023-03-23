import React from "react";
import { MainContent, Navbar } from "./components/routeComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
