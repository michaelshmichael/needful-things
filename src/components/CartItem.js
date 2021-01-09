import React, { useState } from 'react';
import '../styles/Cart.scss'

export default function CartItem (props) {
    const itemsTotal = props.item.price*props.item.itemTotal;
    const [disableDecreaseButton, setDisableDecreaseButton] = useState(true)
    
    const increaseNumberOfItems = () => {
        props.item.itemTotal+=1;
        props.updateCartPrice(props.item.price, 'plus');
        setDisableDecreaseButton(false);
    };

    const decreaseNumberOfItems = () => {
        props.item.itemTotal-=1;
        props.updateCartPrice(props.item.price, 'minus');
        if(props.item.itemTotal === 1){
             setDisableDecreaseButton(true);
        }
    };

    const format = (amount) => {
        const currencyFormatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });
        return currencyFormatter.format(amount);
    };

    return(
        <div className='item-container-in-cart'>
            <h2 className='item-header'>{props.item.item} : {format(props.item.price)}</h2>
            <div className='item-information'>
                <img className='item-image'src={props.item.gallery[0]} alt={props.item.gallery[0]}>
                </img>
                <div className='item-quantity'>
                    <h3>Price: {format(itemsTotal)}</h3>
                    <div className='change-quantity'>
                        <p>No. of items</p>
                        <button className='change-quantity-button' disabled={disableDecreaseButton} onClick={decreaseNumberOfItems}>-</button>
                        <input
                        className='change-quantity-input' 
                        type='number'
                        value={props.item.itemTotal} 
                        id={props.item.id} 
                        ></input>
                        <button className='change-quantity-button' onClick={increaseNumberOfItems}>+</button>
                    </div>
                    <button
                    className='delete-item-button'
                    id={props.item.id}
                    onClick={e => props.deleteItemFromCart(e)}>Delete Item</button>
                </div>
            </div>
        </div>
    )
};
