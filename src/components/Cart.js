import React, { useEffect } from 'react';
import CartItem from './CartItem';
import '../styles/Cart.css';

export default function Cart (props) {

    useEffect(() => {
        props.setInitialTotalPrice();
      });

    const format = (amount) => {
        const currencyFormatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });
        return currencyFormatter.format(amount);
    };

    return (
        <div className={props.cartContainerClass}>
            <h1>Your Cart</h1>
            {props.cartContents.map((item) => (
                <CartItem 
                item={item}
                updateCartPrice={props.updateCartPrice}
                deleteItemFromCart={props.deleteItemFromCart}/>
            ))}
            <h2>Subtotal: {format(props.cartPrice)}</h2>
            <button onClick={props.toggleCartDisplay}>Hide Cart</button>
        </div>
    )
};
