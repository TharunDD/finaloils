import React, { useState, useEffect } from 'react';
import "./AdminDashboard.css";
import { db } from '../firebase';
import { doc, updateDoc, query, where, collection, getDocs } from 'firebase/firestore';
const Totaldet = ({ users }) => {
  const [approvalFilter, setApprovalFilter] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [myObject, setMyObject] = useState(null);
  const closePopup = () => {
    setShowPopup(false);
  };

  // Initialize ad as an array
  const [ad, setad] = useState([
    {
      name: 'sunfoil',
      quantity: 0.5,
      price: 56,
    },
    {
      name: "tharun",
      quantity: 2,
      price: 900
    }
  ]);

  const showdet = (det) => {
    setad(det.item);
    setShowPopup(true);
  }
  const Markdeliverd = async (us) => {
    try {
      // Query the Orders collection to find the document with the matching oid
      const orderQuery = query(collection(db, "Orders"), where("oid", "==", us.oid));
      const querySnapshot = await getDocs(orderQuery);
  
      // If there's a document with the matching oid, update its statu field to 1
      querySnapshot.forEach(async (doc) => {
        await updateDoc(doc.ref, {
          statu: 1,
        });
      });
  
      console.log("Order marked as delivered successfully!");
    } catch (error) {
      console.error("Error marking order as delivered:", error);
    }
  }
  return (
    <div>
      <div>
        <div style={{ maxWidth: "100%", marginLeft: "47%", marginTop: "15px", marginBottom: "15px" }}><h1>Slot Detials</h1></div>
        <div className="sortbt">
          <button onClick={() => setApprovalFilter(0)}>Pending</button>
          <button onClick={() => setApprovalFilter(1)}>Delivered</button>
        </div>
        <div className="table-container" style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Order ID</th>
                <th>Items</th>
                <th>status</th>
                <th>Mark As delivered</th>
              </tr>
            </thead>
            <tbody>
              {users.filter(user => approvalFilter === null || user.statu === approvalFilter)
                .map((user, index) =>
                  (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.date}</td>
                      <td>{user.id}</td>
                      <td>{user.oid}</td>
                      {/* Pass user to showdet function */}
                      <td><button onClick={() => showdet(user)}>products</button></td>
                      <td>{user.statu == 0 ? "Pending" : "Delivered"}</td>
                      <td>{user.statu == 0 ? <button onClick={()=>Markdeliverd(user)}>Mark Delivered</button> : "Delivered"}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        {showPopup && (
          <div className="popup-overlay">
            <div
              className="popup"
              style={{
                position: "fixed",
                top: "50%",
                left: "60%",
                transform: "translate(-50%, -50%)",
                fontSize: "2.5rem",
                zIndex: "9999",
              }}
            >
              <span className="close" onClick={closePopup}>
                &times;
              </span>
              <div className="admin-info">
                {/* Map over ad array and return JSX elements */}
                <table>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Product Price</th>
      </tr>
    </thead>
    <tbody>
      {ad.map((a, index) => (
        <tr key={index}>
          <td >{a.name}</td>
          <td >{a.quantity}</td>
          <td >{a.price}</td>
        </tr>
      ))}
    </tbody>
  </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Totaldet;
