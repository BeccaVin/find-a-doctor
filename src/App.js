import HomePage from './pages/HomePage';
import NoPage from "./pages/NoPage";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
        < Route exact path="/" element={<HomePage />} />
        < Route exact path="/Login" element={<LoginPage />} />
        < Route exact path="/Register" element={<RegisterPage />} />
        < Route element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
