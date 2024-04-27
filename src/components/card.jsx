import React from "react";
import "./Card.css"; // Import your custom CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
const ProductCard = ({ product }) => {
  const { image, name, price } = product;
  const dispatch = useDispatch();
  const hand = (product) => {
    console.log("hi");
    dispatch(addToCart(product));
  };

  const buyNow = () => {};

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-price">liter:${price}</p>

        <div className="card-buttons">
          <button className="add-to-cart-button" onClick={() => hand(product)}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <Link to="/c" state={{ data: product }}>
            <button className="buy-now-button">
              <FontAwesomeIcon icon={faCreditCard} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ products }) => {
  const defaultProducts = [
    {
      product_id: 1,
      name: "Peanut Oil",
      image: "src/images/groundoil.jpg",
      price: 160,
      description:
        "Peanut oil, also known as groundnut oil, is a popular cooking oil known for its mild flavor and high smoking point. It is a versatile oil that's great for frying, sautéing, and even in salad dressings. Our premium peanut oil is extracted from the finest peanuts, ensuring top-quality and purity. It's a must-have in every kitchen, adding a delightful taste to your favorite dishes.",
    },
    {
      product_id: 2,
      name: "Sunflower Oil",
      image: "src/images/sunoil.jpg",
      price: 190,
      description:
        "Sunflower oil is a heart-healthy choice for all your culinary needs. It's light in taste and perfect for cooking and baking. Our sunflower oil is made from carefully selected sunflower seeds, ensuring a delightful flavor that won't overpower your dishes. With its high smoke point, it's excellent for frying and stir-frying.",
    },
    {
      product_id: 3,
      name: "Mustard Oil",
      price: 200,
      image: "src/images/mustardoil.jpg",
      description:
        "Mustard oil, a staple in many Indian kitchens, adds a unique and pungent flavor to your dishes. It's commonly used in cooking and pickling. Our premium mustard oil is extracted from the finest mustard seeds, ensuring its distinctive taste and quality. Whether you're making curries or marinating meats, this oil adds an authentic touch to your recipes.",
    },
    {
      product_id: 4,
      name: "Gingelly Oil (Sesame Oil)",
      image: "src/images/sesman.jpg",
      price: 190,
      manufacture_date: "2023-04-10",
      description:
        "Gingelly oil, also known as sesame oil, is a popular choice in Asian cuisine. It has a nutty, rich flavor and is perfect for stir-frying and seasoning. Our high-quality gingelly oil is made from premium sesame seeds, ensuring the utmost taste and purity. It's a must-have for adding a distinctive aroma and taste to your dishes.",
    },
  ];

  // Use the provided products or default products if none are provided
  const productList = products || defaultProducts;

  return (
    <div className="container">
      <div className="card-container">
        {productList.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
