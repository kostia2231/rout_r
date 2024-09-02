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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
      <Navbar />
    </>
  );
}
export default App;
