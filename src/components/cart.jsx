import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import "./cart.css";
import { toast } from 'react-toastify';
import { removeFromcart, clearFromcart, decreaseCart, inCart, gettotal } from '../features/cartSlice';
import { v4 as uuidv4 } from 'uuid'; // Importing UUID library

// Function to generate a random ID
const generateRandomId = () => {
  return uuidv4(); // Using UUID v4 for random IDs
};

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const u = useSelector((state) => state.cart.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettotal());
  }, [cart]);

  const sendtodb = async () => {
    // Generate a random ID
    const randomId = generateRandomId();

    const cko = {
      oid: randomId, // Assigning the random ID to the 'oid' attribute
      item: cart.Cartitems.map((item) => ({
        name: item.name,
        quantity: item.cartQuantiy,
        price: item.price,
      })),
      totalAmount: cart.CartTotalA,
      uid: u.uid,
      statu:0,
      date: new Date().toISOString(),
    };

    try {
      await setDoc(doc(db, "Orders", cko.oid), cko);
      dispatch(clearFromcart());
      toast.success('Checkout successful');
    } catch (error) {
      console.error('Error during checkout:', error);
      toast.error('Error during checkout');
    }
  };

  const handleRemovefromcart = (cartItem) => {
    console.log("hi");
    dispatch(removeFromcart(cartItem));
  };

  const handleclaer = () => {
    dispatch(clearFromcart());
  };

  const haop = (ci) => {
    dispatch(decreaseCart(ci));
  };

  const hj = (o) => {
    dispatch(inCart(o))
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.Cartitems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty</p>
          <div className="start-shopping">
            <Link to="/">
              <span>
                <AiOutlineArrowLeft /> Start Shopping
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="Price">Price</h3>
            <h3 className="Quantity">Quantity(L)</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.Cartitems && cart.Cartitems.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={`${cartItem.image}`} alt="cart-item" />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p className="cart-item-description">{cartItem.description}</p>
                    <button className="btn btn-success" onClick={() => handleRemovefromcart(cartItem)}>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">Rs.{cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => haop(cartItem)}>-</button>
                  <div className="count">{cartItem.cartQuantiy}</div>
                  <button onClick={() => hj(cartItem)}>+</button>
                </div>
                <div className="cart-product-total-price">
                  Rs.{cartItem.price * cartItem.cartQuantiy}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleclaer()}>Clear cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="Amount">{cart.CartTotalA}</span>
              </div>
              <p>Free shipping available</p>
              <button className='btn btn-success' onClick={sendtodb}>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <span>
                    <AiOutlineArrowLeft /> Continue Shopping
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
