import React from 'react'
import Newuser from '../NewUser/NewUser'

const AdminDashboard = () => {
localStorage.setItem('login', 'true')
    
if(localStorage.getItem("login")==="true"){
  return (
    <>
    <div>
    <h1>AdminDashboard
    </h1></div>
    <Newuser/>
    </>
  );

} else {
    return(
        <>
            <div>
                <h2>Log in first!</h2>
            </div>
        </>
    );
}
}

export default AdminDashboard