import HomePage from './pages/HomePage';
import NoPage from "./pages/NoPage";
import LoginPage from './pages/LoginPage';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
        < Route exact path="/" element={<HomePage />} />
        < Route exact path="/Login" element={<LoginPage />} />
        < Route element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
