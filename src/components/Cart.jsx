import React, { useReducer } from 'react';
import { cartReducer } from '../reducers/CartReducer';
import CartItem from './CartItem';
// import './App.css';
//cart=This Cart component manages the overall shopping cart functionality
const Cart = () => {
  const initialState = { //intitial state of the cart
    items: [], //items of the cart
    total: 0, //total price
  };

  const [state, dispatch] = useReducer(cartReducer, initialState); //using useReducer state and dispatch function is created 

  const productList = [
    { id: 1, name: "Shirt", price: 25.5 },
    { id: 2, name: "Pants", price: 50 },
    { id: 3, name: "Shoes", price: 70 },
    { id: 4, name: "T-Shirt", price: 30 },
  ]; //list of products

  // Add selected product to cart
  const addItemToCart = (product) => {
    dispatch({
      type: "ADD_ITEM", payload: product
    });
  };

  // const calculateTotal = () => {
  //   dispatch({ type: 'CALCULATE_TOTAL' });
  // };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>

      {state.items.length > 0 ? (
        <div>
          {state.items.map(item => (
            <CartItem key={item.id} item={item} dispatch={dispatch} /> //CartItem used to idividual items in the cart details and key is important to diff two tem
          ))}
          <div className="total">
            {/* <button onClick={calculateTotal} className='p-2 btn btn-success m-1'>Calculate Total</button> */}
            {/* <h4></h4> */}
            <p>Total Price: ${state.total.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty</p>
      )}

      <div className="product-selection">
        {productList.map((product) => (

          <button
            key={product.id}
            onClick={() => addItemToCart(product)}
            className='m-1 p-2 btn btn-secondary'
          >
            Add {product.name} - ${product.price}
          </button>

        ))}
      </div>
    </div>
  );
};

export default Cart;
