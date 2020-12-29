import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
                <div className='cart-icon'>
                    <AiTwotoneShopping />
                </div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className='number-of-items'
                 >
                 {props.numberOfItemsInBasket}
                </motion.div>
                
            </div>
            
            
        </div>
    )
};
