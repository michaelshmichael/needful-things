import React from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneShopping } from 'react-icons/ai';
import '../styles/Header.css';

export default function Header (props) {
    return (
        <div className='header'>
            <div className='links'>
                <Link to='./' className='home-link'>Needful Things</Link>
                <Link to='./shop' className='shop-link'>Shop</Link>
            </div>
            <div className='cart-icon-and-number-of-items'>
                <AiTwotoneShopping className='cart-icon' onClick={props.toggleCartDisplay}/>
                <div className='number-of-items' onClick={props.toggleCartDisplay}>
                 {props.numberOfItemsInCart}
                 </div>
            </div>
            
            
        </div>
    )
};
