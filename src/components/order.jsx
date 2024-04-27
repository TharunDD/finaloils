import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { removeFromcart } from '../features/cartSlice';

const Order = () => {
  const [userDat, setUserData] = useState([]);
  const u = useSelector((state) => state.cart.user);
  const [expandedOrderIds, setExpandedOrderIds] = useState([]); // To track which orders' details are expanded
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (u && u.uid) {
          const userQuery = query(collection(db, 'Orders'), where('uid', '==', u.uid));
          const querySnapshot = await getDocs(userQuery);
          const userData = [];
          querySnapshot.forEach((doc) => {
            userData.push({ id: doc.id, ...doc.data() });
          });
          setUserData(userData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
      }
    };
    fetchOrders();
  }, []);

  const toggleExpandedOrder = (orderId) => {
    setExpandedOrderIds(prevState => {
      if (prevState.includes(orderId)) {
        return prevState.filter(id => id !== orderId); // Collapse the order if it's already expanded
      } else {
        return [...prevState, orderId]; // Expand the order
      }
    });
  };

  return (
    <div>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <div className='titles'>
          <div>Order Id</div>
          <div>Date of Order</div>
          <div>Price</div>
          <div>Status</div>
          <div>Show order</div>
        </div>
        <div>
          <div className="cart-items">
            {userDat.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div>{cartItem.oid}</div>
                <div className="cart-product">{cartItem.date}</div>
                <div className="cart-product-price">Rs.{cartItem.totalAmount}</div>
                <div>
                  <button className='warning' onClick={() => toggleExpandedOrder(cartItem.id)}>See order detail</button>
                </div>
                <div className="cart-product-price">{cartItem.statu == 0 ? "pending" : "Delivered"}</div>
                {expandedOrderIds.includes(cartItem.id) && (
                  <div className="order-items">
                    <div className='titles'>
                      <div>Product Name</div>
                      <div>Price</div>
                      <div>Quantity</div>
                      <div>SubTotal</div>
                    </div>
                    {cartItem.item.map((item) => (
                      <div key={item.id} className='titles'>
                        <div >{item.name}</div>
                        <div >{item.price}</div>
                        <div >{item.quantity}</div>
                        <div>{item.price * item.quantity}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-checkout">
              <div className="continue-shopping">
                <Link to="/">
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
