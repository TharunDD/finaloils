import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './spage';
import './Login.css';
import { signInWithEmailAndPassword} from 'firebase/auth';
import {login} from '../features/cartSlice'
import { auth, db } from '../firebase';
import { doc ,getDoc} from "firebase/firestore";
import { toast } from 'react-toastify';

function Logg() {
  const [formData, setFormData] = useState({
    umail: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    const { umail, password } = formData;
  
    if (!umail || !password) {
      toast.error('Please fill in all fields.');
      return;
    }
  
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(umail);
  
    if (!isEmailValid) {
      toast.error('Please enter a valid email address.');
      return;
    }
  
    try {
      console.log("trying");
      const userdet = await signInWithEmailAndPassword(auth, formData.umail, formData.password);
      const user = userdet.user;
      console.log(user.uid);
      toast.success("Successfully logged in");
    
      // Fetch additional user data from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        console.log("User name:", userData.name);
        const ud = {
          name: userData.name,
          uid: userData.uid,
          email:userData.email
        };
            dispatch(login(ud));
        navigate('/');
      } else {
        console.error("User data not found in Firestore");
        // Handle the case where user data doesn't exist
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Something went wrong");
    }
  }    
  return (
    <div>
      <Navbar></Navbar>
    <div className='l'>
    <div className="asd">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="umail"
                placeholder="Your Mail Id"
                value={formData.umail}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="action">
            <Link to="/sig">
              <button>Siginin</button>
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

export default Logg;
