import React, { useState } from "react";
import "./LinkNewDeviceForm.css";
import axios from "axios";

function LinkNewDeviceForm(props) {
  const [formData, setFormData] = useState({
    deviceName: props.deviceDetails.device_id,
    userName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName } = formData;

    if (userName) {
      axios.post("http://localhost:5000/updatedevice", formData).then((res) => {
        alert(res.data.message);
      });
      alert("Registered Successfully");
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="registration-form">
      <h2>Link Device to a user</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Link Device</label>
          <input
            type="text"
            name="deviceName"
            value={formData.deviceName}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Link Device to User</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LinkNewDeviceForm;
