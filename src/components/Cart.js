import React, { useEffect } from 'react';
import CartItem from './CartItem';
import uniqid from 'uniqid';
import '../styles/Cart.scss';

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
            <div className='cart-header'>
            <h1 className='your-cart'>Your Cart</h1>
            <button className='uibutton' onClick={props.toggleCartDisplay}>Hide Cart</button>
            </div>
            {props.cartContents.map((item) => (
                <CartItem
                key={uniqid} 
                item={item}
                updateCartPrice={props.updateCartPrice}
                deleteItemFromCart={props.deleteItemFromCart}/>
            ))}
            <h2>Subtotal: {format(props.cartPrice)}</h2>
            
        </div>
    )
};
