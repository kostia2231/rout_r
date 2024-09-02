import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import UserProfile from "./pages/userProfile";
import Users from "./pages/users";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId/:username" element={<UserProfile />} />
      </Routes>
    </>
  );
}
export default App;
