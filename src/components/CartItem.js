import React from 'react';

export default function CartItem (props) {
    return(
        <div className='item-container-in-cart'>
            <h3>{props.item.item}</h3>
            <div className='item-information'>
                <img className='item-image'src={props.item.gallery[0]} alt={props.item.gallery[0]}>
                </img>
                <div className='item-quantity'>
                    <h3>Price: {props.item.price}</h3>
                    <div className='change-quantity'>
                        <h4>No. of items</h4>
                        <button></button>
                        <input 
                        type='number' 
                        id={props.item.id} 
                        placeholder = '1' 
                        ></input>
                        <button></button>
                    </div>
                    <button
                    id={props.item.id}
                    onClick={e => props.deleteItemFromCart(e)}>Delete Item</button>
                </div>
            </div>
        </div>
    )
};
