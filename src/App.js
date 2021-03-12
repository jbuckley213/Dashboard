import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import GraphCard from "./components/GraphCard";
import Info from "./components/Info";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <GraphCard />
    </div>
  );
}

export default App;
