import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import LoanCategories from "./pages/LoanCategories";
import LoanDetails from "./pages/LoanDetails";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loans" element={<LoanCategories />} />
        <Route path="/loans/:categoryId" element={<LoanDetails />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;