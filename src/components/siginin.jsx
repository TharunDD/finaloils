import React, { useState } from "react";
import './Login.css'; 
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Navbar from "./spage";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {login} from '../features/cartSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'
import { setDoc , doc ,getDoc} from "firebase/firestore";
import { db } from "../firebase";
// ... (previous imports and component setup)

function Sigg() {
  const [formData, setFormData] = useState({
    name: "",
    umail: "",
    password: "",
    phone: "",
    address: "",
  });
  const [loding,setlod]=useState(false);
  const [otpData, setOtpData] = useState({
    otp: 0,
    verified: false,
  });
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOTPChange = (e) => {
    const { name, value } = e.target;
    setOtpData({ ...otpData, [name]: value });
  }; 

        const handleSubmit = async (e) => {
          e.preventDefault();  
          const { name, umail, password, phone, address,o } = formData;
          const isEmailValid =/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(umail);
          const isPhoneValid = /^\d{10}$/.test(phone);
          if (!name || !umail || !password || !phone || !address) {
            toast.error("Please fill in all fields.");}
          else if (!isEmailValid) {
            toast.error("Please enter a valid email address.");
          } 
          else if (!isPhoneValid) {
            toast.error("Phone number must have exactly 10 digits.");
          } 
          else {
            e.preventDefault();
            setlod(true);
            try{
              const userdet=await createUserWithEmailAndPassword(auth,formData.umail,formData.password)
              const user=userdet.user;
              console.log(user);
              await setDoc(doc(db,"users",user.uid),{
                uid: user.uid,
                name: formData.name,
                email: formData.umail,
                phone: formData.phone,
                password:formData.password,
                address: formData.address,
              })
              toast.success("Account created");
              dispatch(login())
              navigate('/');
            }
            catch(error){
              toast.error("something went wrong");
              console.log(error);
            }
          }
          
        };
        return (
          <div>
            <Navbar></Navbar>
            <div className="l">
          <div className="asd">
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="content">
                  <div className="input-field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-field">
                    <input
                      type="text"
                      name="password"
                      placeholder="Enter your Password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-field">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-field">
                    <div className="email-input">
                      <input
                        type="text"
                        name="umail"
                        placeholder="Your Mail Id"
                        value={formData.umail}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="input-field">
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter Address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="action">
                  <Link to="/log">
                    <button>Login</button>
                  </Link>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
          </div>
          </div>
  );
}

export default Sigg;
