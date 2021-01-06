import React, { useState } from 'react';

export default function CartItem (props) {
    const [itemQuantity, setItemQuantity] = useState(1);
    const itemTotal = props.item.price*itemQuantity;
    
    const increaseNumberOfItems = () => {
        setItemQuantity(itemQuantity+Number(1));
        props.updateCartPrice(props.item.price, 'plus');
    };

    const decreaseNumberOfItems = () => {
        setItemQuantity(itemQuantity-Number(1));
        props.updateCartPrice(props.item.price, 'minus');
    };

    // useEffect(() => {
    //     let totalPrice = itemQuantity * props.item.price;
    //     setItemTotal(totalPrice);
    //     props.updateSubtotal(totalPrice);
    // }, [itemQuantity] );

    return(
        <div className='item-container-in-cart'>
            <h3>{props.item.item}</h3>
            <div className='item-information'>
                <img className='item-image'src={props.item.gallery[0]} alt={props.item.gallery[0]}>
                </img>
                <div className='item-quantity'>
                    <h3>Price: {itemTotal}</h3>
                    <div className='change-quantity'>
                        <h4>No. of items</h4>
                        <button onClick={decreaseNumberOfItems}>-</button>
                        <input 
                        type='number'
                        value={itemQuantity} 
                        id={props.item.id} 
                        ></input>
                        <button onClick={increaseNumberOfItems}>+</button>
                    </div>
                    <button
                    id={props.item.id}
                    onClick={e => props.deleteItemFromCart(e)}>Delete Item</button>
                </div>
            </div>
        </div>
    )
};
