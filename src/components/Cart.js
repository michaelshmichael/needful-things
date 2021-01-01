import React, {useState} from 'react';
import { motion } from 'framer-motion';
import '../styles/Cart.css';

export default function Cart (props) {
    const [subtotal, setSubtotal] = useState(0)

    const updateSubtotal = (e) => {
        console.log(e.target.value)
        //let amountToIncrement = e.target.textContent;
        
        setSubtotal(subtotal + 2);
    };

    // if(props.cartContents.length === 0){
    //     props.cartContents.concat('The cart is empty')
    // };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            >
            <div className={props.cartContainerClass}>
                <h1>Your Cart</h1>
                {props.cartContents.map((item) => (
                    <div className='item-container-in-cart'>
                        <h3>{item.item}</h3>
                        <div className='item-information'>
                            <img className='item-image'src={item.gallery[0]} alt={item.gallery[0]}>
                            </img>
                            <div className='item-quantity'>
                                <h3>Price: {item.price}</h3>
                                <div className='change-quantity'>
                                    <h4>No. of items</h4>
                                    <input type='number' placeholder='1' onChange={e => updateSubtotal(e)}></input>
                                </div>
                                <button
                                id={item.id}
                                onClick={e => props.deleteItemFromCart(e)}>Delete Item</button>
                            </div>
                        </div>
                    </div>
                ))}
                <h2>Subtotal: {subtotal}</h2>
                <button onClick={props.toggleCartDisplay}>Hide Cart</button>
            </div>
        </motion.div>
    )
};
