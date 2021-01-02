import React, {useState} from 'react';
import CartItem from './CartItem';
import wholeInventory from '../data';
import '../styles/Cart.css';

export default function Cart (props) {
    const [subtotal, setSubtotal] = useState(0)

    // const updateSubtotal = (e) => {
    //     let product = wholeInventory.find(product => product.id === e.target.id);
    //     let itemTotal = e.target.value * product.price;
    //     let total = subtotal;
    //     setSubtotal(total += itemTotal)
    // };

    return (
        <div className={props.cartContainerClass}>
            <h1>Your Cart</h1>
            {props.cartContents.map((item) => (
                <CartItem item={item}/>
            ))}
            <h2>Subtotal: {subtotal}</h2>
            <button onClick={props.toggleCartDisplay}>Hide Cart</button>
        </div>
    )
};
