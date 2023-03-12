import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from "./pages/Demo";
import LiveStream from "./pages/LiveStream";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LiveStream />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
