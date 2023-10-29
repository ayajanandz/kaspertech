import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

function PopupLinkNewDevice(props) {
  const { children, openLinkDevicePopUp, setOpenLinkDevicePopUp } = props;

  return (
    <Dialog open={openLinkDevicePopUp}>
      <DialogTitle>
        <div>Link New Device</div>
      </DialogTitle>

      <DialogContent>{children}</DialogContent>
      <hr />
      <div className="cancelbtn">
        <Button
          variant="outlined"
          onClick={() => setOpenLinkDevicePopUp(false)}
        >
          Cancel
        </Button>
      </div>
    </Dialog>
  );
}

export default PopupLinkNewDevice;
