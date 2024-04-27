import React from "react";
import Navbar from "./spage";
import "./aboutus.css";
import Footersp from "./footersp";
import Footer from "./footer";

export default function About() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container col-9">
        <div className="body">
          <img src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/10/Cooking-Oils-518792803-770x533-1-650x428.jpg"></img>
          <br></br>
          <br></br>
          <h3 className="font">
            Premium Cooking Oils for Your Kitchen!<br></br>
            Welcome to Aalaa, your one-stop shop for all your cooking oil needs.
          </h3>
          <br></br>
          <div className="container col-8">
            <p className="para">
              Aalaa is a leading online store that provides you with high-quality cooking oils. Our cooking oils are carefully sourced and processed to maintain their purity and nutritional value.
              <br></br>
              <br></br>
              Cooking oils are an essential part of every kitchen, and the choice of oil can make a significant difference in your cooking. At Aalaa, we ensure that you have access to the best cooking oils for your culinary needs. Whether you are frying, sautéing, or baking, we have the right oil for you.
              <br></br>
              <br></br>
              Our oils not only enhance the flavor of your dishes but also promote your well-being. We offer a range of oils that cater to different cooking styles and dietary preferences. Choose Aalaa for all your cooking oil requirements.
            </p>
          </div>
          <br></br>
          <br></br>
          <img src="https://media.istockphoto.com/id/1317729366/photo/various-vegetable-and-nut-oil-in-bottles-on-a-bright-background.jpg?s=612x612&w=0&k=20&c=tf5l5TyY6WUPlq0F9sOG9kPO26iFOVvwWS3uQ-S4FN8=" width="500px" height="450px" alt="Cooking Oil" />
          <h5>What do we do?</h5>
          <p className="para">
            We offer a wide selection of cooking oils to meet the diverse needs of home cooks, chefs, and food enthusiasts. Our mission is to provide you with pure and high-quality cooking oils that enhance the taste of your dishes and support your health.
            <br></br>
            <br></br>
            Aalaa is committed to delivering cooking oils that are free from additives and artificial processing, ensuring that you receive the authentic taste and nutrients in every drop. Our vision is to create a happy cooking culture and make your kitchen a healthier and tastier place.
          </p>
          <br></br>
          <br></br>
          <div className="container">
            <div className="row para">
              <div className="col-md-6">
                <img
                  src="https://media.istockphoto.com/id/1221117323/photo/woman-pouring-oil-in-frying-pan.jpg?s=612x612&w=0&k=20&c=2emYiLAhxCylO9AcDP3MhpY_to7-7qAEWogy0CFnVDQ="
                  className="img-fluid"
                  alt="Cooking Oil 1"
                />
                <br></br>
                <br></br>
                <h4 className="text-center">Our Mission</h4>
                <p className="text-center">
                  To provide everyone with pure, high-quality cooking oils that enhance the flavor of their dishes and promote their well-being.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="https://media.istockphoto.com/id/1218981208/photo/croquette-cooking.jpg?s=612x612&w=0&k=20&c=DsE3KvDISVoPUoA8bfCCGLalvaC7h-e6OFkqjBy-VRA="
                  className="img-fluid" 
                  alt="Cooking Oil 2"
                />
                <br></br>
                <br></br>
                <h4 className="text-center">Our Vision</h4>
                <p className="text-center">
                  We aim to create a happy cooking culture by delivering the finest cooking oils for your kitchen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="text-center">
          <h2 className="choose">Why Choose Us?</h2>
          <p style={{ fontFamily: "monospace" }}>
            There are several reasons why you should choose Aalaa for your cooking oil needs:
          </p>
          <img src="./images/icon.jpg" alt="Choose Us Icon" />
        </div>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row para">
            <div className="col-md-4">
              <img src="https://t3.ftcdn.net/jpg/01/03/74/84/360_F_103748444_vY2FIbRx86d969BLEMbCQ610Pkx6m3OX.jpg" className="img-fluid" alt="Delivery" />
              <br></br>
              <br></br>
              <h4 className="text-center">Fast Free Delivery</h4>
              <p className="text-center">
                At Aalaa, we offer fast and free delivery of our cooking oils to ensure your satisfaction. We strive to deliver products to your doorstep within 2-3 days, making your cooking experience convenient and enjoyable.
              </p>
            </div>
            <div className="col-md-4">
              <img src="https://media.istockphoto.com/id/1137722220/photo/cook-pours-oil-on-a-skillet.jpg?s=612x612&w=0&k=20&c=P5sdkUmsITLDhGyl-KlWH76BAKcmJ9-u7vPQeDergA0=" className="img-fluid" alt="Handmade Products" />
              <br></br>
              <br></br>
              <h4 className="text-center">Handcrafted Oils</h4>
              <p className="text-center ">
                Aalaa delivers you handcrafted cooking oils that are pure and freshly extracted. Our products are made with the finest ingredients, preserving their nutritional value and ensuring you get the best quality for your kitchen.
              </p>
            </div>
            <div className="col-md-4">
              <img src="https://media.istockphoto.com/id/535007541/photo/factory-for-the-production-of-edible-oils-shallow-doff.jpg?s=612x612&w=0&k=20&c=AhvmwupXznGr7_dZ4rcJgsJyeCTZVdHdIiHB4hFgvq4=" className="img-fluid" alt="Honest Business" />
              <br></br>
              <br></br>
              <h4 className="text-center">Honest Business</h4>
              <br></br>
              <p>
                At Aalaa, we uphold the values of ethical and clean business practices. Our deals are affordable and competitive, attracting genuine customers from around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <Footersp></Footersp>
    </div>
  );
}
