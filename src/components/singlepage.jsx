import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the cart icon
import React, { useState, useMemo } from 'react';
import Navbar from './spage';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'; 
import Footer from './footer';
import { addToCart} from '../features/cartSlice';
import { useDispatch } from 'react-redux';

function ImageCarousel({ images }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="Product" />
        </div>
      ))}
    </Slider>
  );
}

// Define a separate component for the product details
function ProductDetails({ product }) {
  const [selectedWeight, setSelectedWeight] = useState('500g');
  const [quantity, setQuantity] = useState(1);

  const weightOptions = [
    { weight: '500 ML', price: product.price },
 
  ];
  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleClearClick = () => {
    setSelectedWeight('500g'); // Reset selected weight to default
    setQuantity(1); // Reset quantity to default
  };
  
  const pricePerItem = weightOptions.find((item) => item.weight === selectedWeight)?.price || 0;
  const totalPrice = quantity * pricePerItem;
  const dispatch = useDispatch();
  const hand = (k) => {
    console.log("hi");
    console.log(product.image);
    dispatch(addToCart(k));
  };
  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <div className="ratings">
        <div className="stars">★★★★★</div>
        <div className="rating-text">
          <span className="rating-value">5.0</span>
          <span className="review-count">(1 customer review)</span>
        </div>
      </div>
      <p className="description">{product.description}</p>
      <div className='aa'>
      {/* <div className="quantity-container">
        <button
          className="quantity-button"
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <input className="quantity-input" type="text" value={quantity} readOnly />
        <button className="quantity-button" onClick={() => handleQuantityChange(quantity + 1)}>
          +
        </button>
      </div> */}
      <br />
      <div className="weight-selector">
        {weightOptions.map((option) => (
          <div
            key={option.weight}
            className={`weight-option ${selectedWeight === option.weight ? 'selected' : ''}`}
            onClick={() => handleWeightChange(option.weight)}
          >
            <div className="weight-label">{option.weight}</div>
            <div className="price">({option.price} Rs)</div>
          </div>
        ))}
      </div>
    
        <div className="price-details">
          <div className="total-price">
            Price: <span>{totalPrice} <FontAwesomeIcon icon={faRupeeSign} /></span>
          </div>
        </div>
      </div>
      <br />
      {/* Conditionally render the Clear button */}
      {quantity > 1 || selectedWeight !== '500g' ? (
        <button className="clear-button" onClick={handleClearClick}>
          Clear
        </button>
      ) : null}
      {/* Add to Cart button */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <button className="add-to-cart" onClick={() => hand(product)}>

        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      <br/><br/>
      
  </div>

  );
}

function SingleProduct() {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data.name);

  

  const memoizedImages = useMemo(
    () => [
      [data.image],
    ],

  );

  return (
    <div>
      <Navbar></Navbar>
    <div className='container'>
      
<div className="single-product a">
  <div className="product-images col-12">
    <ImageCarousel images={memoizedImages} />
  </div>
  <div className="product-details col-12">
    <ProductDetails product={data} />
  </div>
</div>  
<hr className="horizontal-line" />

        {/* Product Description */}
        <div className='container'>
      <div className='col-12'>
      {/* Services */}
      <div className="services">
        <h3>Services</h3>
        <p>1 years brand Warranty</p>
        <p>Cash on Delivery available?</p>
        <p>Seller: Amazestore 4.9</p>
        <p>7 Days Replacement Policy?</p>
        <p>See other sellers</p>
      </div>
    </div>
    </div>
    <div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default SingleProduct;

