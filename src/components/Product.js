import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import wholeInventory from '../data';
import '../styles/Product.scss';

export default function Product (props) {
    const { productId } = useParams();
    const product = wholeInventory.find(product => product.id === productId);
    
    return (
        <AnimatePresence>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            >
                <div className='product-container'>
                    <h1 className='product-title'>{product.item}</h1>
                    <div className='product-information'>
                        <div className='product-image-container'>
                            <img className='product-image' src={product.gallery[0]} alt={product.id}></img>
                        </div>
                        <div className='product-blurb-and-button'>
                            <div className='product-blurb'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                            <Link to='/shop'><button className='uibutton'>Back to Shop</button></Link>
                            <button 
                            id = {product.id}
                            onClick={e=> props.addItemToCart(e)} 
                            className='uibutton'>Add to Basket</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}