import React from 'react'; //displaying single item
// import './App.css';

const CartItem = ({ item, dispatch }) => { //item=One individual cart item details , dispatch=dispatch function to update the cart item
 //item.price=display the price of the item
 //item.quantity=display the quantity of the item
 // in dispatch type is what type of action we want to perform(add,remove,update) and payload is the data we want to send to the reducer like item id
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, amount: 1 } })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, amount: -1 } })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
