import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import UserProfile from "./pages/userProfile";
import Users from "./pages/users";

function App() {
  console.log("Rendering App");

  const [allUsers, setAllUsers] = useState([]);
  const BASE_URL = "https://dummyjson.com/users";

  async function getUsers() {
    try {
      console.log("Fetching users");
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers().then((data) => {
      console.log("Getting/Setting users data");
      setAllUsers(data.users);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users users={allUsers} />} />
        <Route
          path="/users/:userId/:username"
          element={<UserProfile users={allUsers} />}
        />
      </Routes>
    </>
  );
}

export default App;
