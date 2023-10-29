import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import "./PopupNewDevice.css";

function PopupNewDevice(props) {
  const { children, device, setDevice } = props;

  return (
    <Dialog open={device}>
      <DialogTitle>
        <div>New Device Details</div>
      </DialogTitle>

      <DialogContent>{children}</DialogContent>
      <hr />
      <div className="cancelbtn">
        <Button variant="outlined" onClick={() => setDevice(false)}>
          Cancel
        </Button>
      </div>
    </Dialog>
  );
}

export default PopupNewDevice;
