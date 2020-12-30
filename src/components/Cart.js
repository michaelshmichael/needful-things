import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Cart.css';

export default function Cart (props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            >
            <div className={props.cartContainerClass}>
                Cart Is Here
                <button onClick={props.toggleCartDisplay}>Hide Cart</button>
            </div>
        </motion.div>
    )
};
