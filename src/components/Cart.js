import React from 'react';
import CartItem from './CartItem';
import '../styles/Cart.css';

export default function Cart (props) {
    return (
        <div className={props.cartContainerClass}>
            <h1>Your Cart</h1>
            {props.cartContents.map((item) => (
                <CartItem 
                item={item}
                updateCartPrice={props.updateCartPrice}
                deleteItemFromCart={props.deleteItemFromCart}/>
            ))}
            <h2>Subtotal: {props.cartPrice}</h2>
            <button onClick={props.toggleCartDisplay}>Hide Cart</button>
        </div>
    )
};
