import React from "react";
import Admin from './components/Admin/Admin_login';
import DashboardItem from './components/DashboardItem/DashboardItem'
// import AdminDashboard from './components/DashboardItem/DashboardItem';
import { Routes, Route } from "react-router-dom";

const App = ()=>{

    return(
        <>
        {/* <Navbar /> */}
            <Routes>
                {/* <Route path="/" element={<Landing />}/> */}
                {/* <Route path="/login" element={<Login />}></Route>
                <Route path="/new_login" element={<Newlogin/>}></Route>
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dasboard />} />
                <Route path="/admindashboard" element={<AdminDashboard />} /> */}
                <Route path="/" element={<Admin />} />
                <Route path="/dashboarditem" element={<DashboardItem />} /> 
                
            </Routes>
        </>
    )

}

export default App;