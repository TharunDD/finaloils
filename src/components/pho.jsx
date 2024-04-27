import React from 'react';
import './pho.css';
// import Loader from './Loader';

function Pho() {
  return (
    <div className="Ap">
      <main className="Main">
        <div className="LeftHalf">
          <div className="LeftContent">
            <h2>Quality Oil Products for Every Need</h2>
            <p>Welcome to Oil, your one-stop destination for all types of high-quality oils. Whether you are looking for cooking oils, essential oils, or lubricating oils, we have got you covered. Our mission is to provide top-notch oils to meet your various needs.</p>
            
          </div>
          <div className="OilDesign">
            <div className="OilBlob"></div>
            <div className="OilBlob"></div>
            <div className="OilBlob"></div>
          </div>
        </div>
          <div className="RightContent">
            <img src="src\images\oil_refinery.jpg" alt="Oil Refinery" />
          </div>
   
      </main>
      
    </div>
  );
}

export default Pho;