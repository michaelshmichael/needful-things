import React from 'react';

export default function CartItem (props) {
    const itemTotal = props.item.price*props.item.itemTotal;
    
    const increaseNumberOfItems = () => {
        props.item.itemTotal+=1;
        props.updateCartPrice(props.item.price, 'plus');
    };

    const decreaseNumberOfItems = () => {
        props.item.itemTotal-=1;
        props.updateCartPrice(props.item.price, 'minus');
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
            <h3>{props.item.item} : {format(props.item.price)}</h3>
            <div className='item-information'>
                <img className='item-image'src={props.item.gallery[0]} alt={props.item.gallery[0]}>
                </img>
                <div className='item-quantity'>
                    <h3>Price: {format(itemTotal)}</h3>
                    <div className='change-quantity'>
                        <h4>No. of items</h4>
                        <button onClick={decreaseNumberOfItems}>-</button>
                        <input 
                        type='number'
                        value={props.item.itemTotal} 
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
