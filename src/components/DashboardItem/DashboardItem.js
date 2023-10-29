import React, { useState } from "react";

import "./DashboardItem.css";
import Newuser from "../NewUser/NewUser";
import DeviceForm from "../NewDevice/Newdevice";
import { Button } from "@mui/material";
import BasicTable from "./table";
import Popup from "../Popup/Popup";
import PopupNewDevice from "../PopupNewDevice/PopupNewDevice";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const name = localStorage.getItem("UserName");
  const [openPopup, setOpenPopup] = useState(false);
  const [device, setDevice] = useState(false);

  const logoutFnc = () => {
    localStorage.setItem("UserName", null);
    localStorage.setItem("login", null);
    localStorage.setItem("Email", null);
    navigate("/");
  };

  return (
    <>
      <div className="home-page">
        <h1 style={{ color: "#1976d2", fontSize: 20 }}>
          Welcome {name}to Admin Dashboard
        </h1>
        <div className="logoutbtn">
          <Button
            variant="contained"
            onClick={() => logoutFnc()}
            className="logoutBtn"
            size="large"
          >
            Logout
          </Button>
        </div>
        <hr />
        <div className="register-button">
          <Button variant="contained" onClick={() => setOpenPopup(true)}>
            + Add Customer
          </Button>

          <Button variant="contained" onClick={() => setDevice(true)}>
            + Add Device
          </Button>
        </div>

        <div>
          <BasicTable />
        </div>

        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <Newuser />
        </Popup>

        <PopupNewDevice device={device} setDevice={setDevice}>
          <DeviceForm />
        </PopupNewDevice>
      </div>
    </>
  );
}

export default HomePage;
