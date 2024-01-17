import React from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About_us from "./components/About us";
import Home from "./components/Home";
const App = () => {
  return (
    <div className="Container_app">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
