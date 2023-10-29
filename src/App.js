import React from "react";
import Admin from "./components/Admin/Admin_login";
import DashboardItem from "./components/DashboardItem/DashboardItem";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/dashboarditem" element={<DashboardItem />} />
      </Routes>
    </>
  );
};

export default App;
