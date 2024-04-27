
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

  function Footersp() {
    return (
      <div>
        <div>
          <h1 className="u">About Our services</h1>
          <h6 className="u1">
            <i>
              Sekku is a Premium Quality Honey Online Store, which offers you 100
              % pure and raw honey.
            </i>
          </h6>
          <hr class="golden-hr"></hr>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="d-flex justify-content-center align-items-center "
                  id="k"
                >
                  <img
                    src="https://img.freepik.com/premium-vector/drop-oil-white-background_149267-756.jpg?size=626&ext=jpg&ga=GA1.1.1209045425.1692771721&semt=ais"
                    alt=""
                    className="im"
                  />
                </div>
                <h6 className="yi">Pure</h6>
                <div className="col-12">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias eaque architecto quo possimus labore rerum facere
                  itaque expedita, adipisci fugiat magni, deserunt assumenda aut
                  temporibus beatae totam hic dolores magnam. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Cupiditate quasi minima
                  ipsam labore, iure nihil, sit libero, facere soluta similique
                  laboriosam. Minus, tempora. In nisi vel veritatis deleniti!
                  Ipsum, cupiditate!
                </div>
              </div>
              <div className="col-md-4 ">
                <div
                  className="d-flex justify-content-center align-items-center overflow-hidden"
                  id="k"
                >
                  <img
                    src="https://img.freepik.com/premium-vector/drop-oil-white-background_149267-756.jpg?size=626&ext=jpg&ga=GA1.1.1209045425.1692771721&semt=ais"
                    alt=""
                    className="im"
                  />
                </div>
                <h6 className="yi">Natural</h6>
                <div className="col-12  text-overflow-ellipsis">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias eaque architecto quo possimus labore rerum facere
                  itaque expedita, adipisci fugiat magni, deserunt assumenda aut
                  temporibus beatae totam hic dolores magnam. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Eius rerum eum quia,
                  tempore alias, quas, explicabo beatae repudiandae ipsam voluptas
                  nesciunt et possimus modi dolores esse corporis enim consectetur
                  minima.
                </div>
              </div>
              <div className="col-md-4 ">
                <div
                  className="d-flex justify-content-center align-items-center overflow-hidden"
                  id="k"
                >
                  <img
                    src="https://img.freepik.com/premium-vector/drop-oil-white-background_149267-756.jpg?size=626&ext=jpg&ga=GA1.1.1209045425.1692771721&semt=ais"
                    alt=""
                    className="im"
                  />
                </div>
                <h6 className="yi">Direct sales</h6>
                <div className="col-12  text-overflow-ellipsis">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias eaque architecto quo possimus labore rerum facere
                  itaque expedita, adipisci fugiat magni, deserunt assumenda aut
                  temporibus beatae totam hic dolores magnam. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Eius rerum eum quia,
                  tempore alias, quas, explicabo beatae repudiandae ipsam voluptas
                  nesciunt et possimus modi dolores esse corporis enim consectetur
                  minima.
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="container-fluidcol-12" style={{ background: "black" }}>
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

  export default Footersp;

