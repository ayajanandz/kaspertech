import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PopupLinkNewDevice from "../PopupLinkNewDevice/PopupLinkNewDevice";
import LinkNewDeviceForm from "../LinkNewDeviceForm/LinkNewDeviceForm";

export default function BasicTable() {
  const login = localStorage.getItem("login");
  const [data, setData] = useState([]);
  const [deviceDetails, setDeviceDetails] = useState({});
  const [openLinkDevicePopUp, setOpenLinkDevicePopUp] = useState(false);

  useEffect(() => {
    if (login === "true") {
      axios
        .get("http://localhost:5000/devices")
        .then((res) => setData(res.data))

        .catch((err) => console.log(err));
    } else {
      alert("Oops you are logged out");
      // navigate('/login');
    }
  }, []);

  const handleLinkDevice = (row) => {
    setDeviceDetails(row);
    setOpenLinkDevicePopUp(true);
    //setDeviceOpenPopup(true);
  };

  return (
    <>
      <h1 style={{ color: "#1976d2", fontSize: 20 }}>Device Details</h1>
      <br></br>
      {/* todo: fix the css */}
      <hr />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="thead-dark">
            <TableRow>
              {/* <TableCell>Device ID</TableCell> */}
              <TableCell align="left">Device ID</TableCell>
              <TableCell align="left">User Name</TableCell>
              <TableCell align="left">Device Name</TableCell>
              <TableCell align="left">Fan</TableCell>
              <TableCell align="left">Lights</TableCell>
              <TableCell align="left">Misc</TableCell>
              <TableCell align="center">Status</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.alloted_to_user}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                <TableCell align="left">{row._id}</TableCell>
                <TableCell align="left">
                  {row.alloted_to_user ? row.alloted_to_user : "-"}
                </TableCell>
                <TableCell align="left">{row.device_id}</TableCell>
                <TableCell align="left">
                  {row.alloted_to_user ? row.state.fan : "-"}
                </TableCell>
                <TableCell align="left">
                  {row.alloted_to_user ? row.state.light : "-"}
                </TableCell>
                <TableCell align="left">
                  {row.alloted_to_user ? row.state.mis : "-"}
                </TableCell>
                <TableCell align="center">
                  {row.alloted_to_user ? (
                    <Button variant="outlined" disabled>
                      Unlink
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() => handleLinkDevice(row)
                      }
                    >
                      Link
                    </Button>
                  )}
                </TableCell>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PopupLinkNewDevice
       openLinkDevicePopUp={openLinkDevicePopUp}
        setOpenLinkDevicePopUp={setOpenLinkDevicePopUp}
      >
      <LinkNewDeviceForm deviceDetails={deviceDetails} />
      </PopupLinkNewDevice>
    </>
  );
}
