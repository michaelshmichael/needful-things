import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CgArrowLongLeft } from 'react-icons/cg';
import uniqid from 'uniqid';
import wholeInventory from '../data';
import '../styles/Shop.css';


export default function Shop (props) {
    const [selectedInventory, setSelectedInventory] = useState(wholeInventory);
    const [shopTitleText, setShopTitleText] = useState('shop-title-text');
    const [collectionAndReturnText, setCollectionAndReturnText] = useState('shop-title-return-hidden');
    
    const populateSelectedCollectionArray = (collection) => {
        let selectedInventory = [];
        wholeInventory.forEach(item => {
          if(item.collection === collection){
            selectedInventory.push(item)
          }
        })
        setSelectedInventory(selectedInventory);
        setShopTitleText('shop-title-text-hidden');
        setCollectionAndReturnText('shop-title-return');
    };
    
    const selectCollection = (collection) => {
        switch (collection.target.outerText) {
            case 'Jewellery':
            populateSelectedCollectionArray('jewellery');
            break;
            case 'Biblical':
            populateSelectedCollectionArray('biblical');
            break;
            case 'Memorabilia':
            populateSelectedCollectionArray('memorabilia');
            break;
            default:
            // Required default
        };
    };

    const returnToWholeInventory = () => {
        setSelectedInventory(wholeInventory);
        setShopTitleText('shop-title-text');
        setCollectionAndReturnText('shop-title-return-hidden');
    };

    const format = (amount) => {
        const currencyFormatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });
        return currencyFormatter.format(amount);
    };

   
    return(
        <div className='shop-container'>
            <div className='shop-sidebar'>
                <h2 className='sidebar-title'>Collections</h2>
                <ul className='sidebar-list-title'>
                    <li className='sidebar-list-item' onClick={e => selectCollection(e)}>Jewellery</li>
                    <li className='sidebar-list-item' onClick={e => selectCollection(e)}>Memorabilia</li>
                    <li className='sidebar-list-item' onClick={e => selectCollection(e)}>Biblical</li>
                </ul>
            </div>
            <div className='shop-items'>
                <h2 className={shopTitleText}>Welcome to Needful Things. Buy now, pay later.</h2>
                <h2 className={collectionAndReturnText} onClick={returnToWholeInventory}>
                <CgArrowLongLeft className='return-arrow'></CgArrowLongLeft>     Back to All
                </h2>
                <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    >
                <div className='inventory-display'>
                    {selectedInventory.map((item) => (
                        <div className='shop-item-card' id={item.id} onClick={e => props.redirectToProduct(e)} key={uniqid}>
                            <div className='shop-item-image-container'>
                                <img className='shop-item-image' src={item.gallery[0]} alt='Amulet'></img>
                            </div>
                            <div className='shop-item-info'>
                                <div>{item.item}</div>
                                <div>{format(item.price)}</div>
                            </div>
                        </div>
                    ))}
                </div>
                </motion.div>
    </AnimatePresence>
            </div>
        </div>
        
    )
}