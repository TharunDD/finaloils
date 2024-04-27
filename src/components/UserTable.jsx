import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import "./AdminDashboard.css"

const UserTable = ({ users }) => {
  const u = useSelector((state) => state.cart.user);
  useEffect(()=>{
    console.log("Hiii");
  },[])
  return (
    <div className="table-container" style={{ overflowX: 'auto' }}>
      <div style={{marginLeft:"47%", marginTop:"10px",marginBottom:"10px"}}><h1>User Detials</h1></div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Uid</th>
            <th>phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.id}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              {/* <td><button onClick={() => deleteuser(user.uid)}>Delete</button></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
