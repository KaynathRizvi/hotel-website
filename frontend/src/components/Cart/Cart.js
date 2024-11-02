import React from 'react';

const Cart = ({ cartItems }) => {
  // Check if cartItems is truthy and an array
  if (!cartItems || !Array.isArray(cartItems)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;