import React, { useState } from 'react';
import "./Newdevice.css";
import axios from 'axios';

function DeviceForm() {
  const [formData, setFormData] = useState({
    name: '',
    fan: '',
    light: '',
    mis: '',
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

    const { name, fan, light, mis} = formData
        
    if( name && fan && light && mis) {
        axios.post("http://localhost:5000/deviceregister", formData)
        .then( res => {alert(res.data.message)
         } )
        alert("Registered Successfully")
        
    } else {
        alert("invalid input")
    }
    
    console.log(formData);
  };

  return (
    <div className="registration-form">
      <h2>New Device</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Device Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Fan</label>
          <input
            type="number"
            name="fan"
            value={formData.fan}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Lights</label>
          <input
            type="number"
            name="light"
            value={formData.light}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Miscellaneous</label>
          <input
            type="number"
            name="mis"
            value={formData.mis}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DeviceForm;
