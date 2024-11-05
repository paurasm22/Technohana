import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import HomeLayout from "./pages/HomeLayout";

// Dummy components for routes inside /home
const Communication = () => <h2>Communication Page</h2>;
const GHL = () => <h2>GHL Page</h2>;
const Directory = () => <h2>Directory Page</h2>;
// Add more dummy components for each route as needed

function App() {
  return (
    <Routes>
      {/* Routes without sidebar */}
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />

      {/* Routes with sidebar (under /home path) */}
      <Route
        path="/home/*"
        element={
          <HomeLayout>
            <Routes>
              <Route path="communication" element={<Communication />} />
              <Route path="ghl" element={<GHL />} />
              <Route path="directory" element={<Directory />} />
            </Routes>
          </HomeLayout>
        }
      />
    </Routes>
  );
}

export default App;

// cources,quiz and feedback
