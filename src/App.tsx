import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import SignupForm from "./components/Login";
import Navbar from "./components/Navbar";
import Inform from "./pages/Inform";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="big-container">
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:id" element={<Inform />} />
            <Route path="/login" element={<SignupForm/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
