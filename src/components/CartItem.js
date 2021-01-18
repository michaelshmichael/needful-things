import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import '../styles/Cart.scss'

export default function CartItem (props) {
    const itemsTotal = props.item.price*props.item.itemTotal;
    
    const increaseNumberOfItems = () => {
        props.item.itemTotal+=1;
        props.updateCartPrice(props.item.price, 'plus');
    };

    const decreaseNumberOfItems = () => {
        if(props.item.itemTotal > 1){
            props.item.itemTotal-=1;
            props.updateCartPrice(props.item.price, 'minus');
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
                    
                        <p>No. of items</p>
                        <div className='change-quantity'>
                        <FiMinus className='change-quantity-button' 
                        onClick={decreaseNumberOfItems}/>
                        <input
                        className='change-quantity-input' 
                        type='number'
                        value={props.item.itemTotal} 
                        id={props.item.id} 
                        ></input>
                        <FiPlus className='change-quantity-button' onClick={increaseNumberOfItems}/>
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
