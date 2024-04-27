import React from "react";
  import "./footer.css";
  import {
    FaHeadphones,
    FaTruck,
    FaUndo,
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaGift,
    FaClock,
    FaRocket,
  } from "react-icons/fa"; // Import the necessary icons

  function Footer() {
    return (
      <div>
       <div className="container-fluid col-12" style={{ background: "black", marginTop: "100px" }}>
          <footer className=" footer" >
            <div className="waves">
              <div className="wave" id="wave1"></div>
              <div className="wave" id="wave2"></div>
            </div>
            <div className="row row-equal-spacing" style={{ color: "white" }}>
              {/* First Column */}
              <div className="col-md-4 col-sm-12 mb-4">
                <h4>Contact Us</h4>
                <div>
                  <FaHeadphones /> +91 96779 17333
                  <br />
                  <FaEnvelope /> Email: hello@aalaa.co.in
                </div>
                <ul className="social-icons mt-3">
                  <div>
                    <FaFacebook /> {/* Add your Facebook link */}
                    <FaInstagram /> {/* Add your Instagram link */}
                    {/* Add more social media icons as needed */}
                  </div>
                  {/* Add more social media icons as needed */}
                </ul>
              </div>

              {/* Second Column */}
              <div className="col-md-4 col-sm-6 col-xs-6 mb-4">
                <h4>Information</h4>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Shop</li>
                  <li>Contact</li>
                  <li>Blog</li>
                </ul>
              </div>

              {/* Third Column */}
              <div className="col-md-4 col-sm-6 col-xs-6 mb-4">
                <h4>My Account</h4>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li style={{ marginBottom: "8px" }}>Free Sample</li>
                  <li style={{ marginBottom: "8px" }}>Private Labeling</li>
                  <li style={{ marginBottom: "8px" }}>Bulk Orders</li>
                  <li style={{ marginBottom: "8px" }}>Reward Points</li>
                  <li style={{ marginBottom: "8px" }}>Privacy Policy</li>
                  <li style={{ marginBottom: "8px" }}>Terms & Conditions</li>
                </ul>
              </div>
            </div>
            <hr style={{ borderColor: "#777" }} />
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Designed by KEC &copy; {new Date().getFullYear()}</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  export default Footer;




