import HomePage from './pages/HomePage/HomePage';
import NoPage from "./pages/NoPage";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DoctorListPage from './pages/DoctorListPage';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {googleApiKey} from './utils/Utils';
import { useJsApiLoader } from '@react-google-maps/api';

const libraries = ['places'];

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleApiKey,
    libraries: libraries
  })  
  if (!isLoaded) {
    return <h2 className="maps__loading">Loading Maps</h2>
  }
  return (
  <BrowserRouter>
    <Routes>
        < Route 
          exact path="/" 
          element={<HomePage 
          />}/>
        < Route exact path="/Login" element={<LoginPage />} />
        < Route exact path="/Register" element={<RegisterPage />} />
        < Route 
          exact path="/DoctorsList" 
          element={<DoctorListPage 
          />} />
        < Route element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
